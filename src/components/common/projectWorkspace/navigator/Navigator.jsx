import React from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { FaArrowLeft, FaBook, FaExclamationCircle } from 'react-icons/fa'; // Import các biểu tượng từ react-icons

const Navigator = () => {
  return (
    <div className="fixed flex item-center top-0 left-0 mx-3 my-5 z-50">
      <header className= "bg-white rounded-md  shadow-md">
        <div className="container mx-auto px-2 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/common/logo_1.jpg" alt="Logo" width="100" height="40" className="border border-gray-300 rounded-lg"/>
            <span className="text-gray-500 text-sm mx-4 px-4 border-x ">DỰ ÁN DEMO</span>
          </div>
          <div className="flex items-center">
            {/* Thêm các biểu tượng */}
            <Link href="/user/documents" className="flex items-center text-gray-700 border hover:text-green-500 hover:border-green-500 font-bold py-1 px-2 rounded-md mx-2">
              <FaArrowLeft className="mr-1" />
            </Link>
            <Link href="/user/documents" className="flex items-center text-gray-700 border hover:text-green-500 hover:border-green-500 font-bold py-1 px-2 rounded-md mx-2">
              <FaBook className="mr-1" />
            </Link>
            <Link href="/user/documents" className="flex items-center text-gray-700 border hover:text-green-500 hover:border-green-500 font-bold py-1 px-2 rounded-md mx-2">
              <FaExclamationCircle className="mr-1" />
            </Link>
            <Link href="/user/projects" className="bg-green-500 hover:bg-green-700 text-sm text-white font-bold py-1 px-2 rounded-md">
              Chia sẻ
            </Link>
          </div>
        </div>
      </header>
      <div className="flex item-center rounded-md z-50 mx-2 shadow-md bg-white">
          <Link href="/user/documents" className="flex items-center text-gray-700 border hover:text-green-500 hover:border-green-500 font-bold py-1 px-2 rounded-md">
            3D
          </Link>
      </div>
      <div className="flex item-center rounded-md z-50 mx-l-2 shadow-md bg-white">
          <Link href="/user/documents" className="flex items-center text-gray-700 border hover:text-green-500 hover:border-green-500 font-bold py-1 px-2 rounded-md">
            2D
          </Link>
      </div>
    </div>
  )
}

export default Navigator;
