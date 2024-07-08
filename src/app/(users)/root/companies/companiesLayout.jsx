import React from 'react';
import NavbarRoot from "../../../../components/userpage/root/NavbarRoot";
import SidebarRoot from "../../../../components/userpage/root/SidebarRoot";

const CompaniesLayout = ({ children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <SidebarRoot />
      <NavbarRoot />
      <div>{children}</div> {/* Nơi nội dung động sẽ được hiển thị */}
    </div>
  );
};

export default CompaniesLayout;