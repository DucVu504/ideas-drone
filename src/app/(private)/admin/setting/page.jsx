"use client"
import React, { useState } from 'react';
import AdminLayout from "@/components/layout/adminLayout/AdminLayout";
import UserProfile from "@/components/common/userProfile/UserProfile";
import UserRequest from "@/components/common/userRequest/UserRequest";
import ContainerWrapper from '@/components/pages/user/share/containerWrapper/ContainerWrapper';

const Profile = () => {

  const [showUserProfile, setShowUserProfile] = useState(true);

  const toggleToUserProfile = () => setShowUserProfile(true);
  const toggleToUserRequest = () => setShowUserProfile(false);

  return (
<AdminLayout>
    <ContainerWrapper>
      <div>
        <div className="flex justify-between border-b-2 border-green-500 w-[250px]">
          <button
            onClick={toggleToUserProfile}
            className={`p-2 w-1/2 rounded-t-xl ${showUserProfile ? 'bg-green-500 text-white' : 'bg-gray-100 text-black'}`}
          >
            User Profile
          </button>
          <button
            onClick={toggleToUserRequest}
            className={`p-2 w-1/2 rounded-t-xl ${!showUserProfile ? 'bg-green-500 text-white' : 'bg-gray-100 text-black'}`}
          >
            Help
          </button>
        </div>
        <div className="mt-8">
          {showUserProfile ? <UserProfile /> : <UserRequest />}
        </div>
      </div>
      </ContainerWrapper>
    </AdminLayout>
  );
};

export default Profile;