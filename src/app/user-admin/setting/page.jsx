
import Navbar from "../../../components/userpage/nomal_user/Navbar";
import Sidebar_admin from "../../../components/userpage/admin_user/Sidebar_admin";
import Developing from "../../../components/shared/developing/Developing";
import React from "react";

const Setting = () => {

  return (
    <div className="bg-gray-50 min-h-screen">
    <div className="grid grid-cols-[192px,1fr] ">
        <Developing/>
    </div>
    </div>
  );
};

export default Setting;
