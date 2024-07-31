"use client";
import React, { useEffect, useRef, useState } from "react";
import AddLabelForm from "@/components/common/projectWorkspace/addLabelForm/AddLabelForm";
import Toolbar from "@/components/common/projectWorkspace/ToolsBar/ToolBar";

import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CESIUM_ION_ACCESS_TOKEN;

const CesiumMap = () => {
  const cesiumContainerRef = useRef(null);
  const viewerRef = useRef(null);

  const [mode, setMode] = useState(null);
  const [pickedFeatureInfo, setPickedFeatureInfo] = useState(null);

  const modeRef = useRef(mode);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    if (!cesiumContainerRef.current || viewerRef.current) return;

    Cesium.Ion.defaultAccessToken = ACCESS_TOKEN;

    const creditContainer = document.createElement("div");
    creditContainer.style.display = "none";

    const viewer = new Cesium.Viewer(cesiumContainerRef.current, {
      animation: false,
      navigationHelpButton: false,
      timeline: false,
      homeButton: false,
      infoBox: false,
      creditContainer: creditContainer,
    });

    viewerRef.current = viewer;

    const initializeMap = async () => {
      try {
        const resource = await Cesium.IonResource.fromAssetId(2684536);

        const dataSource = await Cesium.GeoJsonDataSource.load(resource);

        viewer.dataSources.add(dataSource);
        viewer.zoomTo(dataSource);

        // Add click event listener
        const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        handler.setInputAction((movement) => {
          const pickedObject = viewer.scene.pick(movement.position);

          
          if (Cesium.defined(pickedObject) && pickedObject.id) {
            const featureInfo = pickedObject.id.properties;
            setPickedFeatureInfo(featureInfo);
            
            console.log("featureInfo", pickedFeatureInfo );
          } else {
            setPickedFeatureInfo(null);
          }
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

      } catch (error) {
        console.error("Error initializing Cesium map:", error);
      }
    };

    initializeMap();

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div ref={cesiumContainerRef} className="w-full h-full" />
      <Toolbar setMode={setMode} mode={mode} />
      <AddLabelForm />
      {console.log("TEST", pickedFeatureInfo )}
      <div
        className={`absolute top-0 w-80 mt-32 left-0 p-2 bg-white border transition-transform duration-500 ${
          pickedFeatureInfo? "translate-x-0" : "-translate-x-full"
        }`}
      >
      {pickedFeatureInfo && (
          <div key={"key"}>
            <strong>{"fname"}:</strong> {pickedFeatureInfo.fclass.getValue()}
          </div>
      )}

      </div>
    </div>
  );
};

export default CesiumMap;
