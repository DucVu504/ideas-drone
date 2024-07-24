// components/Toolbar.js

import React from 'react';
import Image from "next/legacy/image"
import Link from 'next/link';


const SearchBar = () => {
  return (
    <header className="fixed top-0 left-0 mx-3 my-5 bg-white bg-opacity-60 hover:bg-opacity-100 rounded-md z-50 shadow-md">
      <div className="container mx-auto px-2 py-1 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/images/common/Logo_2.jpg" alt="Logo" width="150" height="50" className="border border-gray-300 rounded-lg"/>
          <span className="text-gray-500 mx-4 px-4 border-x ">DỰ ÁN DEMO</span>
        </div>

        <div className="flex items-center">
        <Link href="/user/projects" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">
            Quay lại
        </Link>
      </div>
      </div>
    </header>
  )
}

const ToolBox = () => {
  return (
    <div>
      <SearchBar/>
    </div>

  );
};

export default ToolBox;

