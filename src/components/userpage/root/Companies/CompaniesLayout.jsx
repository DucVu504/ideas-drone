import React from 'react';
import NavbarRoot from "../NavbarRoot";
import SidebarRoot from "../SidebarRoot";

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