"use client"
import React from 'react';
import Users from "./Users";
import Projects from "./Projects";
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import Overview from '@/components/pages/user/admin/dashboard/Overview';

import MapProjects from '@/components/common/mapProjects/MapProjects';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const { t } = useTranslation("user_board");
  const [company_name, setCompany_name] = useState('');

  const projects = [
    { name: 'Dự án 1', address: 'Hà Nội, Việt Nam' },
    { name: 'Dự án 2', address: 'TP Hồ Chí Minh, Việt Nam' },
    { name: 'Dự án 2', address: 'Huế, Việt Nam' },
    { name: 'Dự án 2', address: 'Thanh Hóa, Việt Nam' },
    // Thêm các dự án khác
  ];

  useEffect(() => {
    setCompany_name(localStorage.getItem('company_name').toUpperCase());
  }, []);

  return (
    <section className="bg-gray-50 z-0 p-3 sm:p-5 lg:ml-36">
      <div className="mx-auto max-w-screen-xl px-4 lg:mt-16">
        <div className="bg-gray-50 min-h-screen">
          <div className="grid grid-cols-2 grid-rows-4 gap-4 h-full">
            <div className="col-span-1 row-span-1 bg-gray-50">
              <Overview />
            </div>
            <div className="col-span-1 row-span-4 bg-gray-50" style={{ height: '750px' }}>
              <MapProjects projects={projects} />
            </div>
            <div className="col-span-1 row-span-3 rounded-lg border border-red-500 bg-lime-500">
              <Users />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};


export default Dashboard;
