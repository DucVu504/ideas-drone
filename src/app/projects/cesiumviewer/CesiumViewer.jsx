"use client"


import { useEffect } from 'react';
import { Viewer, Ion, IonResource, createWorldTerrain, Cesium3DTileset } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzNzg4NmU4MC05NzU0LTQ0YWMtOTViOC1lOWY1OWQzOGIxZTkiLCJpZCI6MjA0MjgyLCJpYXQiOjE3MTEzNTk0NDJ9.sKyAJZcvRFs19Z5MFzxAPpwO8TzK6voLbkIZ0Odj6Bk"
const CesiumViewer = () => {
  useEffect(() => {
    // Cấu hình API Key cho Cesium Ion
    Ion.defaultAccessToken = ACCESS_TOKEN;

    const viewer = new Viewer('cesiumContainer', {
      terrainProvider: createWorldTerrain()
    });

    // Tải dữ liệu từ Cesium Ion, ví dụ một asset với ID cụ thể
    const assetId = 2584679; // Thay bằng ID thực của bạn
    IonResource.fromAssetId(assetId)
      .then(resource => {
        viewer.scene.primitives.add(new Cesium3DTileset({ url: resource }));
      })
      .catch(error => {
        console.error('Lỗi khi tải asset từ Cesium Ion:', error);
      });

    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div id="cesiumContainer" style={{ width: '100%', height: '100vh' }}></div>
  );
};

export default CesiumViewer;
