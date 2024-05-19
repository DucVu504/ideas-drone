
import Navbar from "./user-components/Navbar";
import Sidebar from "./user-components/Sidebar";
import Mainboard from "./user-components/Mainboard";
import React from "react";

const User = () => {

  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Mainboard/>
    </div>
  );
};

export default User;
