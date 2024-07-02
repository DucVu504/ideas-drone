
import Navbar from "../../../../components/userpage/users/Navbar";
import Sidebar_root from "../../../../components/userpage/root/Sidebar_root";
import Mainboard_root from "../../../../components/userpage/root/Mainboard_root";
import DataTable from "../../../../components/userpage/root/DataTable";
import Developing from "../../../../components/shared/developing/Developing";
import React from "react";

const Setting = () => {

  return (
    <div className="bg-gray-50 min-h-screen">
    <div className="grid grid-cols-[192px,1fr] ">
      <div>
        <Sidebar_root/>
      </div>
      <div>
        <Mainboard_root/>
      </div>
    </div>
    </div>
  );
};

export default Setting;
