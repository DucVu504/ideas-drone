
import Navbar from "../../../../components/userpage/users/Navbar";
import Sidebar_admin from "../../../../components/userpage/admin/Sidebar_admin";
import UserProfile from "../../../../components/userpage/shared/UserProfile";
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
        <UserProfile/>
      </div>
    </div>
    </div>
  );
};

export default User;
