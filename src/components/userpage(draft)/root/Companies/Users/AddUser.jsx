"use client"

import PropTypes from 'prop-types';
import { useEffect } from 'react';

const AddUser = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}
      <div className={`${isOpen ? 'flex' : 'hidden'} fixed inset-0 z-50 justify-center items-center`}>
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center pb-4 mb-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">
                Thêm người dùng
              </h3>
              <button 
                type="button" 
                className="text-gray-400 bg-transparent hover:bg-red-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" 
                onClick={onClose}
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form action="#">
              <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">Họ</label>
                  <input type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Tên đệm</label>
                  <input type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Doe" required />
                </div>
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">Tên</label>
                  <input type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Tên đăng nhập</label>
                  <input type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="permissions" className="block mb-2 text-sm font-medium text-gray-900">Quyền người dùng</label>
                  <select id="permissions" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                    <option value="Operational">Quản lý</option>
                    <option value="Operational">Nhân viên</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                  <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Xác nhận mật khẩu</label>
                  <input type="password" name="confirmPassword" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="biography" className="block mb-2 text-sm font-medium text-gray-900">Miêu tả</label>
                  <textarea id="biography" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Write a message here"></textarea>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="avatar" className="block mb-2 text-sm font-medium text-gray-900">Tải ảnh</label>
                  <div className="flex items-center space-x-4">
                    <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/150" alt="User avatar" />
                    <input type="file" name="avatar" id="avatar" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Gán vai trò</label>
                  <div className="flex items-center space-x-4">
                    <div>
                      <input type="radio" name="role" id="admin" className="form-radio text-primary-600" />
                      <label htmlFor="admin" className="ml-2 text-sm font-medium text-gray-900">Quản trị viên</label>
                    </div>
                    <div>
                      <input type="radio" name="role" id="member" className="form-radio text-primary-600" />
                      <label htmlFor="member" className="ml-2 text-sm font-medium text-gray-900">Người chỉnh sửa</label>
                    </div>
                    <div>
                      <input type="radio" name="role" id="viewer" className="form-radio text-primary-600" defaultChecked />
                      <label htmlFor="viewer" className="ml-2 text-sm font-medium text-gray-900">Người xem</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button type="button" className="text-gray-600 border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={onClose}>Không lưu</button>
                <button type="submit" className="text-gray-600 bg-lime-300 hover:bg-lime-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5">Thêm người dùng</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AddUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddUser;
