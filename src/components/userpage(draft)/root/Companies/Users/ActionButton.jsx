"use client"
import { useState, useEffect, useRef } from 'react';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';


const ActionButton = ({ rowIndex, totalRows, onEdit }) => {
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
            <button
            className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={() => {onEdit}}
            >
            <PencilAltIcon className="w-5 h-5 mr-2" />
            Edit
            </button>
            <button
            className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100"
            onClick={() => {/* Handle delete action here */}}
            >
            <TrashIcon className="w-5 h-5 mr-2" />
            Delete
            </button>
          </div>
        )}
      </div>
    );
  };

export default ActionButton;