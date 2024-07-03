
import Navbar from "../../../../../components/userpage/users/Navbar";
import Sidebar_root from "../../../../../components/userpage/root/Sidebar_root";
import Users from "../../../../../components/userpage/root/Companies/Users/Users";

import React from "react";

const UsersDashboard = () => {

  return (
    <div className="bg-gray-50 min-h-screen">
    <div className="grid grid-cols-[192px,1fr] ">
      <div>
        <Sidebar_root/>
      </div>
      <div>
        <Users/>
      </div>
    </div>
    </div>
  );
};

export default UsersDashboard;
