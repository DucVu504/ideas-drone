
import Navbar from "./user-components/Navbar";
import Sidebar from "./user-components/Sidebar";
import Mainboard from "./user-components/Mainboard";
import Mainboard_ad from "./user-components/Mainboard_admin";
import React from "react";

const User = () => {

  return (
    <div className="grid grid-cols-[192px,1fr]">
        <Sidebar/>
        <div className="bg-green-50">
          <Navbar/>
          <Mainboard_ad/>
        </div>
    </div>
  );
};

export default User;
