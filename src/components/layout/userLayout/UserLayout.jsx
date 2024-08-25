import React from 'react';
import NavbarUser from "@/components/pages/user/share/navbarUser/NavbarUser";
import SidebarUser from "@/components/pages/user/user/sidebarUser/SidebarUser";

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