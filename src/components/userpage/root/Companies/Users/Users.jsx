"use client"
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FaUserTie, FaUserEdit, FaUser } from 'react-icons/fa';
import { PencilAltIcon, EyeIcon, TrashIcon } from '@heroicons/react/outline';

import Image from 'next/image';

const ActionButton = ({ rowIndex, totalRows }) => {
    const [showOptions, setShowOptions] = useState(false);
    const menuRef = useRef(null);
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    // Determine if the menu should be displayed above the button
    const shouldShowAbove = rowIndex >= totalRows - 2;
  
    return (
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 16c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
          </svg>
        </button>
        {showOptions && (
          <div
            className={`absolute z-50 ${shouldShowAbove ? 'bottom-full mb-2' : 'mt-2'} right-0 w-32 bg-white border border-gray-200 rounded-md shadow-lg`}
          >
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              <PencilAltIcon className="w-5 h-5 mr-2" />
              Edit
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              <EyeIcon className="w-5 h-5 mr-2" />
              Preview
            </a>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100"
            >
              <TrashIcon className="w-5 h-5 mr-2" />
              Delete
            </a>
          </div>
        )}
      </div>
    );
  };
const Users = () => {
    const [sortConfig, setSortConfig] = useState({ key: 'productName', direction: 'ascending' });

    const products = [
        { name: 'NGUYỄN VĂN A', role: 'Quản trị viên', email: 'nguyenA@gmail.com', modified_time: '02/07/2024', status: true },
        { name: 'NGUYỄN VĂN B', role: 'Người xem', email: 'nguyenB@gmail.com', modified_time: '200', status: false },
        { name: 'NGUYỄN VĂN C', role: 'Người chỉnh sửa', email: 'nguyenC@gmail.com', modified_time: '200', status: false },
        { name: 'NGUYỄN VĂN C', role: 'Người chỉnh sửa', email: 'nguyenC@gmail.com', modified_time: '200', status: false },
        { name: 'NGUYỄN VĂN C', role: 'Người chỉnh sửa', email: 'nguyenC@gmail.com', modified_time: '200', status: false },
        { name: 'NGUYỄN VĂN C', role: 'Người chỉnh sửa', email: 'nguyenC@gmail.com', modified_time: '200', status: false },
    ];

    const totalRows = products.length;

    const sortedProducts = [...products].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const router = useRouter();

    const handleEditClick = (id) => {
      router.push(`/edit/${id}`);
    };
  
    const handleViewClick = (id) => {
      router.push(`/view/${id}`);
    };

    return (
        <section className="bg-gray-50  p-3 sm:p-5">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div class="flex items-center p-2 space-x-2 text-sm text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm sm:text-base  sm:space-x-4 ">
                            <li class="flex items-center hover:text-blue-600 ">
                                CÔNG TY IDEASDRONE
                                <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                                </svg>
                            </li>
                            <li class="flex items-center">
                                Người dùng
                            </li>
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <button type="button" className="flex items-center justify-center text-black bg-lime-300 hover:bg-lime-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2">
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                THÊM NGƯỜI DÙNG
                            </button>

                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-sm text-gray-700 uppercase bg-gradient-to-r from-lime-200 to-lime-100 ">
                                <tr>
                                    <th scope="col" className="px-4 py-3 ">
                                        <button type="button" onClick={() => requestSort('name')}>
                                            TÊN NGƯỜI DÙNG{sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[180px]">
                                        <button type="button" onClick={() => requestSort('role')}>
                                            VAI TRÒ {sortConfig.key === 'role' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        <button type="button" onClick={() => requestSort('email')}>
                                            EMAIL {sortConfig.key === 'email' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[180px]">
                                        <button type="button" onClick={() => requestSort('modified_time')}>
                                            NGÀY CẬP NHẬT {sortConfig.key === 'modified_time' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[150px]">
                                        <button type="button" onClick={() => requestSort('status')}>
                                            TRẠNG THÁI {sortConfig.key === 'status' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[150px]">
                                        <button type="button" onClick={() => requestSort('status')}>
                                            HÀNH ĐỘNG {sortConfig.key === 'status' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>


                                </tr>
                            </thead>
                            <tbody>
                                {sortedProducts.map((product, index) => (
                                    <tr key={index} className="border-b hover:bg-slate-50">
                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                                            {product.name}
                                        </th>
                                        <td className="px-4 py-3">
                                            {product.role === 'Quản trị viên' && (
                                            <div className="bg-blue-100 text-blue-800 px-1 rounded flex items-center">
                                                <FaUserTie className="mr-2" />Quản trị viên
                                            </div>
                                            )}
                                            {product.role === 'Người chỉnh sửa' && (
                                            <div className="bg-violet-200 text-violet-800 px-1 rounded flex items-center">
                                                <FaUserEdit className="mr-2" />Người chỉnh sửa
                                            </div>
                                            )}
                                            {product.role === 'Người xem' && (
                                            <div className="bg-gray-200 text-black px-1 rounded flex items-center">
                                                <FaUser className="mr-2" />Người xem
                                            </div>
                                            )}
                                        </td>
                                        <td className="px-4 py-3">{product.email}</td>
                                        <td className="px-4 py-3">{product.modified_time}</td>
                                        <td className="px-4 py-3">
                                            <div className={`h-4 w-4 rounded-md ${product.status ? 'bg-red-500' : 'bg-green-500'}`}></div>
                                        </td>
                                        <td className="py-2 px-4 border-b relative">
                                            <ActionButton rowIndex={index} totalRows={totalRows} />
                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Users;
