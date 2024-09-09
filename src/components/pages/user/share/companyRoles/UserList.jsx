// UserList.js
import React from 'react';

const UserList = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 flex items-center space-x-4 mb-4">
      <img 
        src='./images/common/default_avatar.jpg'
        alt={`${user.name} avatar`} 
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{user.name}</h3>
        <p className="text-gray-500 text-sm">{user.role}</p>

      </div>
    </div>
  );
};

export default UserList;
