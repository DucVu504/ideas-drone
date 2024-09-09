"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import RoleList from './RoleList';
import ProjectPermission from './ProjectPermission';
import SettingPermission from './SettingPermission';
import UserList from './UserList';



import ContainerWrapper from '@/components/pages/user/share/containerWrapper/ContainerWrapper';


const RolePermissionSettings = () => {

    const users = [
        {
          name: 'Jacob Abbott',
          role: 'Developer',
          avatar: 'https://randomuser.me/api/portraits/men/1.jpg', // Example avatar URL
          projects: 3,
          talks: 2,
          progress: 100
        },
        {
          name: 'Marcos Banks',
          role: 'Account Manager',
          avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
          projects: 2,
          talks: 1,
          progress: 0
        },
        {
          name: 'Vlad Bern',
          role: 'Developer',
          avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
          projects: 1,
          talks: 1,
          progress: 0
        },
        {
          name: 'Alice Brock',
          role: 'Administration',
          avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
          projects: 1,
          talks: 1,
          progress: 0
        },
      ];

    return (
        <ContainerWrapper>
            <div className="flex space-x-8 bg-gray-50 rounded-xl shadow-md">
                {/* Role/User List */}
                <RoleList />
                {/* Projects */}
                <ProjectPermission />

                {/* Settings */}
                <SettingPermission />

                {/* Users */}
                <div className="w-1/3">
                {users.map((user, index) => (
                    <UserList key={index} user={user} />
                ))}
                </div>
            </div>
        </ContainerWrapper>
    );
};

export default RolePermissionSettings;
