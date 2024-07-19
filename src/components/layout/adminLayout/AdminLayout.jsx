import React from 'react';
import NavbarAdmin from "../navbarUser/NavbarAdmin";
import SidebarAdmin from "../sidebarAdmin/SidebarAdmin";

const AdminLayout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <SidebarAdmin />
      <NavbarAdmin />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;