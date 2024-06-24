"use client"
import React, { useState } from 'react';

const Profile = () => {
  const [projectName, setProjectName] = useState('Dự án 1');
  const [projectAddress, setprojectAddress] = useState('Thành phố Phan Thiết, tỉnh Bình Thuận');


    return (
      <div className="mx-52 my-8 p-4 flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-md">
        <div className="md:w-1/3 p-4 flex flex-col items-center">
          <img
            src="/login_backgound.jpeg"
            alt="Profile Image"
            className="w-64 h-64 rounded-md mb-4"
          />
          <p className="text-gray-600 mb-4">Bay Area, San Francisco, CA</p>
          <div className="flex space-x-4 w-full">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full">Thêm/đổi ảnh đại diện</button>
          </div>
        </div>
        <div className="md:w-2/3 p-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold m-2 border-b border-gray-300">Tên dự án</h3>
            <input className="text-gray-600 p-2 w-full bg-gray-100" type="text" value={projectName} onChange={e => setProjectName(e.target.value)} />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold m-2 border-b border-gray-300">Địa chỉ</h3>
            <input className="text-gray-600 p-2 w-full bg-gray-100" type="text" value={projectAddress} onChange={e => setProjectAddress(e.target.value)} />
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold m-2 border-b border-gray-300">Ngày cập nhật</h3>
            <p className="text-gray-600 p-2">23/05/2024</p>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold m-2 " for="file_input">Cập nhật dữ liệu</label>
            <input className="block w-full m-2 p-2 rounded-md text-gray-900 border border-gray-300  cursor-pointer bg-gray-50 focus:outline-none " id="file_input" type="file"/>
          </div>
          <div className="text-right">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Cập nhật</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;
  