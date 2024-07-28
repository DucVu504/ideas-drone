import React from 'react';
import NavbarUser from "@/components/layout/navbarUser/NavbarUser";
import SidebarUser from "@/components/layout/sidebarUser/SidebarUser";

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