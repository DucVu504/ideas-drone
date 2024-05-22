"use client"
import { useEffect } from 'react';
import { Viewer, Ion, IonResource, createWorldTerrainAsync, Cesium3DTileset } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzNzg4NmU4MC05NzU0LTQ0YWMtOTViOC1lOWY1OWQzOGIxZTkiLCJpZCI6MjA0MjgyLCJpYXQiOjE3MTEzNTk0NDJ9.sKyAJZcvRFs19Z5MFzxAPpwO8TzK6voLbkIZ0Odj6Bk";
const CesiumViewer = () => {
  useEffect( () => {

    Ion.defaultAccessToken = ACCESS_TOKEN;
    console.log("DUCCCCC")
    const viewer = new Viewer('cesiumContainer');
    console.log('Viewer is:', viewer);
    console.log('Type of viewer:', typeof viewer);

    const assetId = 75343; 
    IonResource.fromAssetId(assetId)
    .then(resource => {
      console.log("PASSS")
      
      const tileset = viewer.scene.primitives.add(new Cesium3DTileset({ url: resource }));
      console.log('Viewer is:', viewer);
      console.log('Viewer is:', resource);
  
      // Chờ cho đến khi tileset đã sẵn sàng để lấy bounding sphere
      return tileset.readyPromise.then(() => {
        const boundingSphere = tileset.boundingSphere;
        viewer.camera.flyToBoundingSphere(boundingSphere);
      });
    })
    .catch(error => {
      console.error('Lỗi khi tải asset từ Cesium Ion:', error);
    });

    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div>
    <div id="cesiumContainer" style={{ width: '100%', height: '100vh' }}></div>
    <div>HSHSH</div>
    </div>

  );
};

export default CesiumViewer;
