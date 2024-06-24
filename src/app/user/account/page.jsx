
import Navbar from "../../../components/userpage/nomal_user/Navbar";
import Sidebar from "../../../components/userpage/nomal_user/Sidebar";
import Mainboard from "../../../components/userpage/nomal_user/Mainboard";
import Mainboard_ad from "../../../components/userpage/admin_user/Mainboard_admin";
import UserProfile from "../../../components/userpage/shared/UserProfile";
import ContactForm from "../../../components/userpage/nomal_user/Contact";
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
        <UserProfile/>
      </div>
    </div>
    </div>
  );
};

export default User;
