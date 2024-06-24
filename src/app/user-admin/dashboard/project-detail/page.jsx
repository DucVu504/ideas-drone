
import Navbar from "./../../../../components/userpage/nomal_user/Navbar";
import Sidebar_admin from "./../../../../components/userpage/admin_user/Sidebar_admin";
import ProjectDetail from "./../../../../components/userpage/admin_user/ProjectDetail";
import React from "react";

const User = () => {

      

  return (
    <div className="bg-gray-50 min-h-screen">
    <div className="grid grid-cols-[192px,1fr] ">
      <div>
        <Sidebar_admin/>
      </div>
      <div>
        <Navbar/>
        <ProjectDetail/>
      </div>
    </div>
    </div>
  );
};

export default User;
