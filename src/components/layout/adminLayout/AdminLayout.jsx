import React from 'react';
import NavbarAdmin from "@/components/layout/navbarUser/NavbarUser";
import SidebarAdmin from "@/components/layout/sidebarAdmin/SidebarAdmin";

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