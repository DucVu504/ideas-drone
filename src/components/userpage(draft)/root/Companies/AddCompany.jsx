"use client"
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const AddCompany = ({ isOpen, onClose }) => {
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
                Thêm dự án
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
              <div className="grid gap-4 mb-4 sm:grid-cols-3">
                <div className = "col-span-2">
                  <div className='py-4'>
                    <label htmlFor="firstName" className="block mb-1 text-sm font-medium text-gray-900">Tên dự án</label>
                    <input type="text" name="firstName" id="firstName" className=" text-gray-900  border-b border-gray-300 text-sm  focus:border-b-primary-600 focus:border-t-0 focus:border-x-0 focus:ring-0 block w-full p-2" placeholder="John" required />
                  </div>
                  <div className='py-4'>
                    <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-gray-900">Địa chỉ</label>
                    <input type="text" name="lastName" id="lastName" className="border-b border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="Số nhà - tên đường" required />
                    <input type="text" name="lastName" id="lastName" className="border-b border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="Xã/ Phường" required />
                    <input type="text" name="lastName" id="lastName" className="border-b border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="Tỉnh/ Thành phố" required />
                  </div>
                  <div className='py-4'>
                    <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-gray-900">Quốc gia</label>
                    <input type="text" name="lastName" id="lastName" className="border-b border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="Quốc gia" required />
                  </div>
                </div>
                <div>
                  <div class="flex items-center justify-center w-full">
                      <Image
                        src="/UserPages/ProjectPictures/project_makeup.png"
                        alt="User avatar"
                        width={150}
                        height={150}
                      />
                  </div> 
                </div>

              </div>
              <div className="flex justify-end space-x-4">
                <button type="button" className="text-gray-600 border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={onClose}>Không lưu</button>
                <button type="submit" className="text-gray-600 bg-lime-300 hover:bg-lime-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5">Thêm dự án</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AddCompany.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddCompany;
