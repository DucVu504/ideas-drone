"use client"
import React from 'react';
import Projects from "./Projects";
import { useTranslation } from 'next-i18next';
import ContainerWrapper from '@/components/pages/user/share/containerWrapper/ContainerWrapper';
import MapProjects from '@/components/common/mapProjects/MapProjects';


const Dashboard = () => {
  const { t } = useTranslation("user_board");

  const projects = [
    { name: 'Dự án 1', address: 'Hà Nội, Việt Nam' },
    { name: 'Dự án 2', address: 'TP Hồ Chí Minh, Việt Nam' },
    { name: 'Dự án 2', address: 'Huế, Việt Nam' },
    { name: 'Dự án 2', address: 'Thanh Hóa, Việt Nam' },
    // Thêm các dự án khác
  ];

  return (
    <ContainerWrapper>
      <div className="bg-gray-50 min-h-screen">
        <div className="grid grid-cols-2 grid-rows-4 gap-4 h-full">
          <div className="col-span-1 row-span-1 bg-gray-50">
            <Projects />
          </div>
          <div className="col-span-1 row-span-4 bg-gray-50" style={{ height: '750px' }}>
            <MapProjects projects={projects} />
          </div>

        </div>
      </div>
    </ContainerWrapper>

  );
};


export default Dashboard;
