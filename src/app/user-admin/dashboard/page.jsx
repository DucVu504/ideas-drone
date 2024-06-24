
import Navbar from "../../../components/userpage/nomal_user/Navbar";
import Sidebar_admin from "../../../components/userpage/admin_user/Sidebar_admin";
import Mainboard_ad from "../../../components/userpage/admin_user/Mainboard_admin";
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
        <Mainboard_ad/>
      </div>
    </div>
    </div>
  );
};

export default User;
