"use client";
import React, { useEffect, useRef, useState } from "react";
import AddLabelForm from "@/components/common/projectWorkspace/addLabelForm/AddLabelForm";
import Toolbar from "@/components/common/projectWorkspace/ToolsBar/ToolBar";
import InfoForm from "@/components/common/projectWorkspace/cesiumView2D/InfoForm";

import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CESIUM_ION_ACCESS_TOKEN;

const CesiumMap = () => {
  const cesiumContainerRef = useRef(null);
  const viewerRef = useRef(null);
  const dataSourceRef = useRef(null);

  const [mode, setMode] = useState(null);
  const [pickedFeatureInfo, setPickedFeatureInfo] = useState(null);
  const [isGeoJsonVisible, setIsGeoJsonVisible] = useState(true);
  const [geoJsonColor, setGeoJsonColor] = useState(Cesium.Color.RED);
  const [geoJsonOpacity, setGeoJsonOpacity] = useState(0.5);

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
        const resource = await Cesium.IonResource.fromAssetId(2687088);
        const dataSource = await Cesium.GeoJsonDataSource.load(resource);
        
        // Set initial color and opacity for GeoJSON
        dataSource.entities.values.forEach(entity => {
          if (entity.polygon) {
            entity.polygon.material = geoJsonColor.withAlpha(geoJsonOpacity);
          }
        });

        viewer.dataSources.add(dataSource);
        dataSourceRef.current = dataSource;

        const imageryLayer = await Cesium.IonImageryProvider.fromAssetId(2662061);
        viewer.imageryLayers.addImageryProvider(imageryLayer);
        console.log("imageryLayer", imageryLayer);

        viewer.zoomTo(dataSource);

        // Add click event listener
        const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        handler.setInputAction((movement) => {
          const pickedObject = viewer.scene.pick(movement.position);

          if (Cesium.defined(pickedObject) && pickedObject.id) {
            const featureInfo = pickedObject.id.properties;
            setPickedFeatureInfo(featureInfo);

            console.log("featureInfo", pickedFeatureInfo);
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

  useEffect(() => {
    if (dataSourceRef.current) {
      if (isGeoJsonVisible) {
        viewerRef.current.dataSources.add(dataSourceRef.current);
      } else {
        viewerRef.current.dataSources.remove(dataSourceRef.current);
      }
    }
  }, [isGeoJsonVisible]);

  useEffect(() => {
    if (dataSourceRef.current) {
      dataSourceRef.current.entities.values.forEach(entity => {
        if (entity.polygon) {
          entity.polygon.material = geoJsonColor.withAlpha(geoJsonOpacity);
        }
      });
    }
  }, [geoJsonColor, geoJsonOpacity]);

  return (
    <div className="relative w-full h-screen">
      <div ref={cesiumContainerRef} className="w-full h-full" />
      <Toolbar setMode={setMode} mode={mode} />
      {/* <AddLabelForm /> */}

      <button
        onClick={() => setIsGeoJsonVisible(!isGeoJsonVisible)}
        className="absolute top-20 left-4 z-10 bg-white p-2 rounded shadow"
      >
        {isGeoJsonVisible ? "Hide GeoJSON" : "Show GeoJSON"}
      </button>

      <div className="absolute top-32 left-4 z-10 bg-white p-2 rounded shadow">
        <label>
          Color:
          <input
            type="color"
            value={geoJsonColor.toCssColorString()}
            onChange={(e) => setGeoJsonColor(Cesium.Color.fromCssColorString(e.target.value))}
          />
        </label>
        <label>
          Opacity:
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={geoJsonOpacity}
            onChange={(e) => setGeoJsonOpacity(parseFloat(e.target.value))}
          />
        </label>
      </div>

      <div
        className={`absolute top-0 w-72 mt-28 bg-white bg-opacity-15 right-16 p-4 rounded-l-md transition-transform duration-500 ${
          pickedFeatureInfo ? "translate-x-0" : "translate-x-full hidden"
        }`}
      >
        {pickedFeatureInfo && (
          <InfoForm
            products={Object.keys(pickedFeatureInfo)
              .filter(
                (key) =>
                  !key.includes("propertyNames") &&
                  !key.includes("definitionChanged") &&
                  !key.includes("Subscription")
              )
              .map((key) => ({
                key: key.replace(/^_/, ""),
                value: String(pickedFeatureInfo[key]),
              }))}
          />
        )}
      </div>
    </div>
  );
};

export default CesiumMap;
