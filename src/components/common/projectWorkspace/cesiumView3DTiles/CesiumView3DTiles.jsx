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
  const handlerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [mode, setMode] = useState(null);
  const [polygonEntity, setPolygonEntity] = useState(null);
  const [mousePosition, setMousePosition] = useState(null);
  const [dynamicPoint, setDynamicPoint] = useState(null);

const modeRef = useRef(mode);
const mousePositionRef = useRef(mousePosition);

  useEffect(() => {
    modeRef.current = mode;
    mousePositionRef.current = mousePosition;
  }, [mode, mousePosition]);

  useEffect(() => {
    Cesium.Ion.defaultAccessToken = ACCESS_TOKEN;

    if (!viewerRef.current) {
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
          const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2584679);
          viewer.scene.primitives.add(tileset);
          await viewer.zoomTo(tileset);

          const center = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center);
          const longitude = Cesium.Math.toDegrees(center.longitude);
          const latitude = Cesium.Math.toDegrees(center.latitude);

          viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
            label: {
              text: "Dự án đây nè",
              font: "Arial",
              fillColor: Cesium.Color.RED,
            },
            point: {
              pixelSize: 10,
              color: Cesium.Color.YELLOW,
            },
          });

          const extras = tileset.asset.extras;
          if (Cesium.defined(extras) && Cesium.defined(extras.ion) && Cesium.defined(extras.ion.defaultStyle)) {
            tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
          }
        } catch (error) {
          console.error("Error initializing Cesium map:", error);
        }
      };

      initializeMap();
    }

    const viewer = viewerRef.current;

    if (!handlerRef.current) {
      const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
      handlerRef.current = handler;

      const updatePolygon = (newPositions) => {
        if (polygonEntity) {
          viewer.entities.remove(polygonEntity);
        }

        const newPolygonEntity = viewer.entities.add({
          polygon: {
            hierarchy: newPositions,
            material: Cesium.Color.RED.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.BLACK,
          },
        });
        setPolygonEntity(newPolygonEntity);

        const positionsDegrees = newPositions.map((pos) => {
          const cartographic = Cesium.Cartographic.fromCartesian(pos);
          return [Cesium.Math.toDegrees(cartographic.longitude), Cesium.Math.toDegrees(cartographic.latitude)];
        });

        const area = calculatePolygonArea(positionsDegrees);
        viewer.entities.add({
          position: Cesium.Cartesian3.fromDegrees(
            (positionsDegrees[0][0] + positionsDegrees[1][0] + positionsDegrees[2][0]) / 3,
            (positionsDegrees[0][1] + positionsDegrees[1][1] + positionsDegrees[2][1]) / 3
          ),
          label: {
            text: `Area: ${area.toFixed(2)} sq meters`,
            font: "20px sans-serif",
            fillColor: Cesium.Color.WHITE,
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 2,
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          },
        });
      };

      handler.setInputAction((click) => {
        if (!modeRef.current) return;

        const cartesian = viewer.scene.pickPosition(click.position);
        if (cartesian) {
          if (modeRef.current === "annotation") {
            const annotation = prompt("Enter annotation:");
            if (annotation) {
              viewer.entities.add({
                position: cartesian,
                // point: {
                //   pixelSize: 10,
                //   color: Cesium.Color.RED,
                //   heightReference: Cesium.HeightReference.CLAMP_TO_3D_TILE,
                // },
                billboard: {
                  image: 'UserPages/ProjectPictures/Note.png', // URL đến hình ảnh
                  width: 50, // chiều rộng của billboard
                  height: 50, // chiều cao của billboard
                  pixelOffset: new Cesium.Cartesian2(0, -50)
                },
                label: {
                  text: annotation,
                  font: "14pt sans-serif",
                  style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                  outlineWidth: 2,
                  verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                  pixelOffset: new Cesium.Cartesian2(0, -9),
                },
              });
            }
            return;
          }

          setPositions((prevPositions) => {
            const newPositions = [...prevPositions, cartesian];
            if (modeRef.current === "distance" && newPositions.length === 2) {
              const distance = Cesium.Cartesian3.distance(newPositions[0], newPositions[1]);
              const midpoint = Cesium.Cartesian3.midpoint(newPositions[0], newPositions[1], new Cesium.Cartesian3());
              viewer.entities.add({
                polyline: {
                  positions: newPositions,
                  width: 4,
                  material: Cesium.Color.YELLOW,
                  clampToGround: false,
                },
              });
              viewer.entities.add({
                position: midpoint,
                label: {
                  text: `Distance: ${distance.toFixed(2)} mét`,
                  font: "20px sans-serif",
                  fillColor: Cesium.Color.WHITE,
                  outlineColor: Cesium.Color.BLACK,
                  outlineWidth: 2,
                  style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                  verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                },
              });
              return [];
            } else if (modeRef.current === "area") {
              updatePolygon(newPositions);
            }
            return newPositions;
          });
        }
      }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

      handler.setInputAction((movement) => {
        const cartesian = viewer.scene.pickPosition(movement.endPosition);
        setMousePosition(cartesian);
      }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

      const calculatePolygonArea = (positions) => {
        let area = 0;
        const n = positions.length;
        for (let i = 0; i < n; i++) {
          const j = (i + 1) % n;
          const xi = positions[i][0];
          const yi = positions[i][1];
          const xj = positions[j][0];
          const yj = positions[j][1];
          area += xi * yj - xj * yi;
        }
        return Math.abs(area / 2);
      };

      return () => {
        if (handlerRef.current) {
          handlerRef.current.destroy();
          handlerRef.current = null;
        }
        if (viewerRef.current) {
          viewerRef.current.destroy();
          viewerRef.current = null;
        }
      };
    }

    if (mousePositionRef.current) {
      if (!dynamicPoint) {
        const point = viewer.entities.add({
          position: mousePositionRef.current,
          point: {
            pixelSize: 10,
            color: Cesium.Color.RED,
          },
        });
        setDynamicPoint(point);
      } else {
        dynamicPoint.position = mousePositionRef.current;
      }
    }
  }, []);

  

  return (
    <div className="relative w-full h-screen">
      <div ref={cesiumContainerRef} className="w-full h-full" />
      <Toolbar setMode={setMode} mode={mode} />
      <AddLabelForm/>
    </div>
  );
};

export default CesiumMap;
