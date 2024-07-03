
import Navbar from "../../../../components/userpage/users/Navbar";
import Sidebar_root from "../../../../components/userpage/root/Sidebar_root";
import Companies from "../../../../components/userpage/root/Companies/Companies";

import React from "react";

const CompaniesDashboard = () => {

  return (
    <div className="bg-gray-50 min-h-screen">
    <div className="grid grid-cols-[192px,1fr] ">
      <div>
        <Sidebar_root/>
      </div>
      <div>
        <Companies/>
      </div>
    </div>
    </div>
  );
};

export default CompaniesDashboard;
