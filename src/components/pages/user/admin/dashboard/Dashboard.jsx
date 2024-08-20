"use client"
import React from 'react';
import Users from "./Users";
import Projects from "./Projects";
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const { t } = useTranslation("user_board");
  const [company_name, setCompany_name] = useState('');

  useEffect(() => {
    setCompany_name(localStorage.getItem('company_name').toUpperCase());
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
        <div className="flex justify-left px-8 pt-20 bg-gray-50 lg:ml-36">
            <div className="items-center border border-gray-300 bg-white p-2 rounded-md inline-flex">
                <button
                className={`py-2 px-4 rounded-l-md ${activeTab === 'users' ? 'bg-lime-400' : 'bg-gray-200'}`}
                onClick={() => setActiveTab('users')}
                >
                {t('users')}
                </button>
                <button
                className={`py-2 px-4 rounded-r-md ${activeTab === 'projects' ? 'bg-lime-400' : 'bg-gray-200'}`}
                onClick={() => setActiveTab('projects')}
                >
                {t('projects')}
                </button>
                <p className="text-gray-500 px-2"><span className="text-cyan-400 text-xl font-bold">| </span>{company_name}</p>
            </div>
        </div>
      {activeTab === 'users' && <Users />}
      {activeTab === 'projects' && <Projects />}
    </div>
  );
};


export default Dashboard;
