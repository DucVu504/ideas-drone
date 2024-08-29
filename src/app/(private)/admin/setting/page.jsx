import AdminLayout from "@/components/layout/adminLayout/AdminLayout";
import UserProfile from "@/components/common/userProfile/UserProfile";
import UserRequest from "@/components/common/userRequest/UserRequest";

import React from "react";

const Profile = () => {

  return (
    <AdminLayout>
        <UserProfile/>
        <UserRequest/>
    </AdminLayout>
  );
};

export default Profile;