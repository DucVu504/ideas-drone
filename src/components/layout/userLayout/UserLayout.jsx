import React from 'react';
import NavbarUser from "../navbarUser/NavbarUser";
import SidebarUser from "../sidebarUser/SidebarUser";

const AdminLayout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <SidebarUser />
      <NavbarUser />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;