// pages/index.js
import dynamic from 'next/dynamic';
import React from 'react';

// Dùng dynamic import để chỉ nạp Cesium trên client-side
const CesiumViewer = dynamic(() => import('./cesiumviewer/CesiumViewer'), {
  ssr: false, // Tắt server-side rendering cho component này
});

const View = () => {
  return (
    <div>
      <CesiumViewer />
    </div>
  );
};

export default View;
