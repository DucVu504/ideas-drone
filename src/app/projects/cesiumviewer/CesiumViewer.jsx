// components/CesiumViewer.js
"use client"
import { useEffect, useState } from 'react';
import { Viewer, Cesium3DTileset, IonResource, createWorldTerrain } from 'cesium';
import "@cesium/engine/Source/Widget/CesiumWidget.css";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzNzg4NmU4MC05NzU0LTQ0YWMtOTViOC1lOWY1OWQzOGIxZTkiLCJpZCI6MjA0MjgyLCJpYXQiOjE3MTEzNTk0NDJ9.sKyAJZcvRFs19Z5MFzxAPpwO8TzK6voLbkIZ0Odj6Bk"

const CesiumViewer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs once, after the first render, and sets isClient to true
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) {
      // If we're not on the client, don't try to create the Viewer
      return;
    }

    const viewer = new Viewer('cesiumContainer')

    viewer.scene.primitives.add(
      new Cesium3DTileset({
        url: IonResource.fromAssetId(2584679, {
          accessToken: ACCESS_TOKEN,
        }),
      })
    );

    return () => {
      viewer.destroy();
    };
  }, [isClient]); // This effect runs whenever isClient changes

  return (
    <div id="cesiumContainer" style={{ width: '100%', height: '100vh' }} />
  );
};

export default CesiumViewer;
