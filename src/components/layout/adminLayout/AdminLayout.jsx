import React from 'react';
import NavbarAdmin from "@/components/pages/user/share/navbarUser/NavbarUser";
import SidebarAdmin from "@/components/pages/user/admin/sidebarAdmin/SidebarAdmin";

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