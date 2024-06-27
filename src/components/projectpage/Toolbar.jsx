// components/Toolbar.js

import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
// import { FaMousePointer, FaSquare, FaTextHeight, FaShapes, FaRedo, FaUndo, FaPen, FaComments, FaCrop, FaUpload, FaPlus } from 'react-icons/fa';
import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoIosText, IoIosSquareOutline, IoIosRadioButtonOff, IoIosRefresh, IoIosUndo, IoIosAddCircleOutline, IoIosCloudUpload, IoIosCrop, IoIosChatbubbles, IoIosCreate } from 'react-icons/io';
const Toolbar = () => {
  return (
    <div className="fixed top-0 left-0 my-32 mx-3 flex flex-col bg-white bg-opacity-60 hover:bg-opacity-100  rounded-md shadow-lg p-1 space-y-3">
      <button className="p-2 hover:bg-green-200 rounded">
        <IoIosRadioButtonOff size={24} />
      </button>
      <button className="p-2 hover:bg-green-200 rounded">
        <IoIosSquareOutline size={24} />
      </button>
      <button className="p-2 hover:bg-green-200 rounded">
        <IoIosText size={24} />
      </button>
      <button className="p-2 hover:bg-green-200 rounded">
        <IoIosCreate size={24} />
      </button>
      <button className="p-2 hover:bg-green-200 rounded">
        <IoIosRefresh size={24} />
      </button>
      <button className="p-2 hover:bg-green-200 rounded">
        <IoIosUndo size={24} />
      </button>
    </div>
  );
};


const SearchBar = () => {
  return (
    <header className="fixed top-0 left-0 mx-3 my-5 bg-white bg-opacity-60 hover:bg-opacity-100 rounded-md z-50 shadow-md">
      <div className="container mx-auto px-2 py-1 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/Logo_2.jpg" alt="Logo" width="150" height="50" className="border border-gray-300 rounded-lg"/>
          <span className="text-gray-500 mx-4 px-4 border-x ">Tên dự án</span>
        </div>
        {/* <div className="flex items-center">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">Quay lại</button>
        </div> */}
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
      {/* <Toolbar/> */}
      <SearchBar/>
    </div>

  );
};

export default ToolBox;

