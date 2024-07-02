"use client"
import React, { useState } from 'react';


const options = [
  { id: 1, label: 'Option 1' },
  { id: 2, label: 'Option 2' },
  { id: 3, label: 'Option 3' },
  { id: 4, label: 'Option 4' },
  { id: 5, label: 'Option 5' },
  { id: 4, label: 'Option 4' },
  { id: 5, label: 'Option 5' },
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative inline-block w-full">
      <button
        onClick={toggleDropdown}
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 first-letter:text-left cursor-default focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 "
      >
        {selectedOptions.length > 0
          ? `${selectedOptions.length} items selected`
          : 'Chọn dự án'}
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            {isOpen ? (
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.94l3.71-3.75a.75.75 0 011.08 1.04l-4.25 4.3a.75.75 0 01-1.08 0l-4.25-4.3a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M4.97 8.47a.75.75 0 011.06-.02L10 12.28l3.97-3.83a.75.75 0 011.04 1.08l-4.5 4.33a.75.75 0 01-1.04 0l-4.5-4.33a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
            )}
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
          <ul className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {options.map(option => (
              <li key={option.id} className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleSelect(option)}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <span className="ml-3 block truncate">
                    {option.label}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


const UserDetail = ({ projects }) => {

  return (
    <div className="mx-52 my-8 p-4">
      <div className="flex items-center mb-6">
        <div className="w-24 h-24 bg-gray-300 rounded-md"></div>
        <div className="ml-4">
          <h2 className="text-xl font-bold">Phùng Anh</h2>
          <p className="text-gray-500">Super User, Viet Nam</p>
          <p className="text-sm text-gray-600">Designer, Director & Animator. Founding Partner of Cub Studio.</p>
          <p className="text-sm text-gray-600">warrencasey@gmail.com</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">Following projects</h3>

        <div>
          {projects.map((project) => (
            <div key={project.id} className="flex items-center justify-between p-4 mb-4 border rounded">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-md"></div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">{project.name}</h4>
                  <p className="text-sm text-gray-500">{project.karma} Karma</p>
                </div>
              </div>
              <button className="px-4 py-2 w-48 bg-red-500 text-white rounded">Xóa quyền truy cập</button>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between">
          <div className= "w-full">
            <Dropdown/>
          </div>
          <div className = "px-4">
            <button className="ml-4 w-48 px-4 py-2 bg-green-500 text-white rounded">Thêm quyền</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
