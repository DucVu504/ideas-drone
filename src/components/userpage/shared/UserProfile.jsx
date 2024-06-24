// components/UserSettingsForm.js

import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 p-6 mx-52 my-8 rounded-lg shadow-lg">
      <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full"
            src="/icon/Icon_4.png"
            alt="User Avatar"
          />
          <h2 className="mt-4 text-xl font-bold">Đức Vũ</h2>
          <p className="text-gray-600">vuduc504@gmail.com</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-green-400">Giới thiệu</h3>
          <p className="text-gray-700 mt-2">
            Kỹ sư phần mềm tại công ty ABC. Tôi là một người yêu thích công nghệ và lập trình.
          </p>
        </div>
      </div>

      <div className="md:w-2/3 bg-white p-6 ml-0 md:ml-6 rounded-lg shadow-md mt-6 md:mt-0">
        <h3 className="text-xl font-bold text-green-400 mb-4">Thông tin người dùng</h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col col-span-2">
              <label className="mb-2 font-semibold">Tên đầy đủ</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter full name"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Email</label>
              <input
                type="email"
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter email ID"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-semibold">Điện thoại</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded"
                placeholder="Enter phone number"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="mb-2 font-semibold">Địa chỉ</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded"
                placeholder="Địa chi"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="mb-2 font-semibold">Tên công ty</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded"
                placeholder="Tên công ty"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="mb-2 font-semibold">Loại tài khoản</label>
              <input
                type="text"
                className="p-2 border border-gray-300 rounded"
                placeholder="Loại tài khoản"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded mr-2">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-green-400 text-white rounded">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
