
import Navbar from "../../../../components/userpage(draft)/users/Navbar";
import Sidebar from "../../../../components/userpage(draft)/users/Sidebar";
import Mainboard from "../../../../components/userpage(draft)/users/Mainboard";
import Mainboard_ad from "../../../../components/userpage(draft)/admin/Mainboard_admin";
import UserProfile from "../../../../components/userpage(draft)/shared/UserProfile";
import ContactForm from "../../../../components/userpage(draft)/users/Contact";
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
        <ContactForm/>
      </div>
    </div>
    </div>
  );
};

export default User;
