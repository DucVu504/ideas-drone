import React from 'react';
import Image from 'next/image';
import ContainerWrapper from '@/components/pages/user/share/containerWrapper/ContainerWrapper';

const UserProfile = () => {
  return (
    // <ContainerWrapper>
      <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg">
        <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <Image
              src="/images/common/default_avartar.jpg"
              alt="User Avatar"
              width={96}
              height={96}
              className="rounded-md"
            />
            <h2 className="mt-4 text-xl font-bold">Đức Vũ</h2>
            <p className="text-gray-600 text-sm">vuduc504@gmail.com</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-green-400">Giới thiệu</h3>
            <p className="text-gray-700 mt-2 text-sm">
              Extra information about the user. This can be used to describe the user in detail.
            </p>
          </div>
        </div>

        <div className="md:w-2/3 bg-white p-6 ml-0 md:ml-6 rounded-lg shadow-md mt-6 md:mt-0">
          <h3 className="text-xl font-bold text-green-400 mb-4 ">Thông tin người dùng</h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col col-span-2">
                <label className="mb-2 font-semibold text-sm">Tên đầy đủ</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded text-sm"
                  placeholder="Enter full name"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-sm">Email</label>
                <input
                  type="email"
                  className="p-2 border border-gray-300 rounded text-sm"
                  placeholder="Enter email ID"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-sm">Điện thoại</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded text-sm"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="flex flex-col col-span-2">
                <label className="mb-2 font-semibold text-sm">Địa chỉ</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded text-sm"
                  placeholder="Địa chi"
                />
              </div>
              <div className="flex flex-col col-span-2">
                <label className="mb-2 font-semibold text-sm">Tên công ty</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded text-sm"
                  placeholder="Tên công ty"
                />
              </div>
              <div className="flex flex-col col-span-2">
                <label className="mb-2 font-semibold text-sm">Loại tài khoản</label>
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded text-sm"
                  placeholder="Loại tài khoản"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded mr-2 text-sm">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-green-400 text-white rounded text-sm">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    // </ContainerWrapper>
  );
};

export default UserProfile;
