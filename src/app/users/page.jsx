
import Navbar from "./user-components/Navbar";
import Sidebar from "./user-components/Sidebar";
import Mainboard from "./user-components/Mainboard";
import React from "react";

const User = () => {

  return (
    <div className="grid grid-cols-[192px,1fr]">
        <Sidebar/>
        <div>
          <Navbar/>
          <Mainboard/>
        </div>
    </div>
  );
};

export default User;
