import React from 'react';
import NavbarRoot from "./NavbarRoot";
import SidebarRoot from "./SidebarRoot";

const AdminLayout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <SidebarRoot />
      <NavbarRoot />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;