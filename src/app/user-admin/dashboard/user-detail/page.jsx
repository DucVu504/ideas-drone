
import Navbar from "./../../../../components/userpage/nomal_user/Navbar";
import Sidebar_admin from "./../../../../components/userpage/admin_user/Sidebar_admin";
import UserDetail from "./../../../../components/userpage/admin_user/UserDetail";
import React from "react";

const User = () => {

    const project_own = [
        { id: 1, name: 'Ashley Graham', karma: 256, followers: '12.3K', articles: 67 },
        { id: 2, name: 'Dusya Sigachyova', karma: 231, followers: '11.8K', articles: 24 },
        { id: 3, name: 'Jelena Denisova', karma: 212, followers: '10.1K', articles: 86 },
        // Add more authors here
      ];
      

  return (
    <div className="bg-gray-50 min-h-screen">
    <div className="grid grid-cols-[192px,1fr] ">
      <div>
        <Sidebar_admin/>
      </div>
      <div>
        <Navbar/>
        <UserDetail projects={project_own}/>
      </div>
    </div>
    </div>
  );
};

export default User;
