
import Navbar from "./user-components/Navbar";
import Sidebar from "./user-components/Sidebar";
import Mainboard from "./user-components/Mainboard";
import Mainboard_ad from "./user-components/Mainboard_admin";
import UserProfile from "./user-components/UserProfile";
import ContactForm from "./user-components/Contact";
import React from "react";

const User = () => {

  return (
    <div className="bg-gray-50 min-h-screen">
    <div className="grid grid-cols-[192px,1fr] ">
      <div>
          <Sidebar/>
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
