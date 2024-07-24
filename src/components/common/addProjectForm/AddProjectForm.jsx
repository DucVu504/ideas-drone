"use client"

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Image from "next/legacy/image";

<Image
  src="https://via.placeholder.com/150"
  alt="User avatar"
  width={40} // Giá trị tương đương với w-10 trong TailwindCSS
  height={40} // Giá trị tương đương với h-10 trong TailwindCSS
  className="rounded-full"
/>

const AddProjectForm = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const [show3DTiles, setShow3DTiles] = useState(true);
  const [showOrthophoto, setShowOrthophoto] = useState(false);
  const [showPointCloud, setShowPointCloud] = useState(false);

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
                    <input type="text" name="lastName" id="lastName" className="border-b border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="Doe" required />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center w-full">
                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Tải ảnh</span> hoặc kéo thả</p>
                            <p className="text-xs text-gray-500 ">SVG, PNG, JPG</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                  </div> 
                </div>
                <div className="sm:col-span-3">
                  <label className="block mb-2 text-sm font-medium text-gray-900">Loại dữ liệu</label>
                  <div className="flex items-center space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        name="data-type"
                        id="3d-tiles"
                        className="form-checkbox text-primary-600"
                        onChange={(e) => setShow3DTiles(e.target.checked)}
                      />
                      <label htmlFor="3d-tiles" className="ml-2 text-sm font-medium text-gray-900">3D Tiles</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="data-type"
                        id="orthophoto"
                        className="form-checkbox text-primary-600"
                        onChange={(e) => setShowOrthophoto(e.target.checked)}
                      />
                      <label htmlFor="orthophoto" className="ml-2 text-sm font-medium text-gray-900">Ảnh trực giao</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="data-type"
                        id="point-cloud"
                        className="form-checkbox text-primary-600"
                        defaultChecked
                        onChange={(e) => setShowPointCloud(e.target.checked)}
                      />
                      <label htmlFor="point-cloud" className="ml-2 text-sm font-medium text-gray-900">Point cloud</label>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  {show3DTiles && (
                    <div>
                      <label htmlFor="avatar" className="block mb-2 text-sm font-medium text-gray-900">Tải dữ liệu 3D Tiles</label>
                      <div className="flex items-center space-x-4 w-full mb-4">
                        <input
                          type="file"
                          name="avatar"
                          id="avatar"
                          className="appearance-none block w-full p-1 text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
                        />
                      </div>
                    </div>
                  )}
                  {showOrthophoto && (
                    <div>
                      <label htmlFor="avatar" className="block mb-2 text-sm font-medium text-gray-900">Tải dữ liệu ảnh trực giao</label>
                      <div className="flex items-center space-x-4 w-full mb-4">
                        <input
                          type="file"
                          name="avatar"
                          id="avatar"
                          className="appearance-none block w-full p-1 text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
                        />
                      </div>
                    </div>
                  )}
                  {showPointCloud && (
                    <div>
                      <label htmlFor="avatar" className="block mb-2 text-sm font-medium text-gray-900">Tải dữ liệu Point cloud</label>
                      <div className="flex items-center space-x-4 w-full mb-4">
                        <input
                          type="file"
                          name="avatar"
                          id="avatar"
                          className="appearance-none block w-full p-1 text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
                        />
                      </div>
                    </div>
                  )}
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

AddProjectForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddProjectForm;
