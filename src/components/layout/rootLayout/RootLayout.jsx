import React from 'react';
import NavbarUser from "../navbarUser/NavbarUser";
import SidebarRoot from "../sidebarRoot/SidebarRoot";

const RootLayout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <SidebarRoot />
      <NavbarUser />
      <div>{children}</div>
    </div>
  );
};

export default RootLayout;