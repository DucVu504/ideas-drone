"use client"
import React, { useEffect, useRef } from 'react';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
const CESIUM_ION_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzNzg4NmU4MC05NzU0LTQ0YWMtOTViOC1lOWY1OWQzOGIxZTkiLCJpZCI6MjA0MjgyLCJpYXQiOjE3MTEzNTk0NDJ9.sKyAJZcvRFs19Z5MFzxAPpwO8TzK6voLbkIZ0Odj6Bk"
const CesiumMap = () => {
  const cesiumContainerRef = useRef(null);

  useEffect(() => {
    // Access token handling (replace with your own or environment variable)
    Cesium.Ion.defaultAccessToken = CESIUM_ION_ACCESS_TOKEN || 'YOUR_ACCESS_TOKEN';
    
    // hide Cesuim credit
    const creditContainer = document.createElement('div');
    creditContainer.style.display = 'none';
    const viewer = new Cesium.Viewer(cesiumContainerRef.current,{
      animation: false,
      navigationHelpButton: false,
      timeline: false,
      homeButton: false,
      infoBox: false,
      creditContainer: creditContainer,
    });

    const initializeMap = async () => {
      try {
        const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(2584679);
        viewer.scene.primitives.add(tileset);
        await viewer.zoomTo(tileset);
        // Lấy tọa độ trung tâm của boundingSphere
        const center = Cesium.Cartographic.fromCartesian(tileset.boundingSphere.center);
        const longitude = Cesium.Math.toDegrees(center.longitude);
        const latitude = Cesium.Math.toDegrees(center.latitude);

        viewer.entities.add({
          position : Cesium.Cartesian3.fromDegrees(longitude, latitude),
          label : {
            text : 'Dự án đây nè',
            font : 'Arial',
            fillColor : Cesium.Color.RED
          },
          point : { // Thêm một điểm
            pixelSize : 10,
            color : Cesium.Color.YELLOW
          }
        });

        // Apply default style if it exists
        const extras = tileset.asset.extras;
        if (Cesium.defined(extras) && Cesium.defined(extras.ion) && Cesium.defined(extras.ion.defaultStyle)) {
          tileset.style = new Cesium.Cesium3DTileStyle(extras.ion.defaultStyle);
        }
      } catch (error) {
        console.error('Error initializing Cesium map:', error);
      }
    };

    initializeMap();

    // Cleanup function to avoid memory leaks
    return () => {
      if (viewer) {
        viewer.destroy();
      }
    };
  }, []);

  return (
    <div ref={cesiumContainerRef} style={{ width: '100%', height: '100%' }} /> // Adjust width and height as needed
  );
};

export default CesiumMap;