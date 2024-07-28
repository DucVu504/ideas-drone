import AdminLayout from "@/components/layout/adminLayout/AdminLayout";
import UserProfile from "@/components/common/userProfile/UserProfile";

import React from "react";

const Profile = () => {

  return (
    <AdminLayout>
        <UserProfile/>
    </AdminLayout>
  );
};

export default Profile;