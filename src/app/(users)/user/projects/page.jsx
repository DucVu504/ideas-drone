
import Navbar from "../../../../components/userpage/users/Navbar";
import Sidebar from "../../../../components/userpage/users/Sidebar";
import Mainboard from "../../../../components/userpage/users/Mainboard";
import Mainboard_ad from "../../../../components/userpage/admin/Mainboard_admin";
import UserProfile from "../../../../components/userpage/shared/UserProfile";
import ContactForm from "../../../../components/userpage/users/Contact";
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
        <Mainboard/>
      </div>
    </div>
    </div>
  );
};

export default User;
