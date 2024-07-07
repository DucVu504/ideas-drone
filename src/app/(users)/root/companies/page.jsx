
import NavbarRoot from "../../../../components/userpage/root/NavbarRoot";
import SidebarRoot from "../../../../components/userpage/root/SidebarRoot";
import Companies from "../../../../components/userpage/root/Companies/Companies";

import React from "react";

const CompaniesDashboard = () => {

  return (
    <div className="bg-gray-50 min-h-screen">


        <SidebarRoot/>
        <NavbarRoot/>
        <Companies/>

    </div>
  );
};

export default CompaniesDashboard;
