"use client"
import React from 'react';
import NavbarUser from "../navbarUser/NavbarUser";
import SidebarRoot from "../sidebarRoot/SidebarRoot";

const RootLayout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
    <NavbarUser className="fixed top-0 left-0 w-full z-10" />
    <SidebarRoot className="fixed top-0 left-0 h-full z-20" />
    <div className="z-0">
        {children}
    </div>
      </div>
  );
};

export default RootLayout;