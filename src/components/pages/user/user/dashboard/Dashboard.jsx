"use client"
import React from 'react';
import Projects from "./Projects";


const Dashboard = () => {

  return (
    <div className="bg-gray-50 min-h-screen">
        <div className="flex justify-left px-8 pt-20 bg-gray-50 lg:ml-36">
            <div className="items-center  bg-white p-2 rounded-md inline-flex">
                <p className="text-gray-500 px-2"><span className="text-cyan-400 text-xl font-bold">| </span>CÔNG TY TNHH MỘT THÀNH VIÊN ABC</p>
            </div>
        </div>
    <Projects />
    </div>
  );
};


export default Dashboard;
