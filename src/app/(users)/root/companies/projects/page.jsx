
import Navbar from "../../../../../components/userpage/users/Navbar";
import Sidebar_root from "../../../../../components/userpage/root/SidebarRoot";
import Projects from "../../../../../components/userpage/root/Companies/Projects/Projects";

import React from "react";

const ProjectsDashboard = () => {

  return (
    <div className="bg-gray-50 min-h-screen">
    <div className="grid grid-cols-[192px,1fr] ">
      <div>
        <Sidebar_root/>
      </div>
      <div>
        <Projects/>
      </div>
    </div>
    </div>
  );
};

export default ProjectsDashboard;
