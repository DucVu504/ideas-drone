"use client"
import React, { useState } from 'react';
import Image from 'next/image';


const SettingPermission = () => {

    return (
        <div className="bg-white px-4 w-1/3 rounded-md laptop:h-[550px] desktop:h-[750px] overflow-y-auto">
            <div className='flex flex-row items-center justify-between sticky top-0 bg-white z-10'>
                <h2 className=" font-bold pt-4 mb-4 sticky top-0 bg-white z-10">SETTINGS</h2>
                <form class="flex items-center w-2/3">
                    <label for="simple-search" class="sr-only">Search</label>

                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-green-500 focus:border-green-500 block w-full p-2" placeholder="Search branch name..." required />

                    <button type="submit" class="p-2.5 text-sm font-medium text-white bg-green-500 rounded-r-lg border border-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </form>
            </div>
            {["Quản lý tài khoản", "Phân quyền", "Other"].map((setting, index) => (
                <div key={index} className="mb-4 p-4 border rounded-md bg-gray-50 hover:shadow-md ">
                    <h3 className="font-semibold bg-gray-200 p-2 rounded-t-md">{setting}</h3>
                    <div className="flex justify-between mt-2">
                        <Image src={"/images/common/role_setting.png"} alt={setting.name} width={80} height={50} className="w-1/5 mt-2 bg-gray-200 p-2 rounded-md" />
                        <div className="flex flex-col justify-between mt-2 w-full">
                            <label class="inline-flex items-center justify-between cursor-pointer p-1 pl-10 pr-4 hover:bg-gray-100 hover:rounded-md">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <span class="ms-3 text-sm font-medium text-gray-900">Toàn quyền</span>
                                <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                            <label class="inline-flex items-center justify-between cursor-pointer p-1 pl-10 pr-4 hover:bg-gray-100 hover:rounded-md">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <span class="ms-3 text-sm font-medium text-gray-900">Toàn quyền</span>
                                <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                            <label class="inline-flex items-center justify-between cursor-pointer p-1 pl-10 pr-4 hover:bg-gray-100 hover:rounded-md">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <span class="ms-3 text-sm font-medium text-gray-900">Toàn quyền</span>
                                <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                            <label class="inline-flex items-center justify-between cursor-pointer p-1 pl-10 pr-4 hover:bg-gray-100 hover:rounded-md">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <span class="ms-3 text-sm font-medium text-gray-900">Toàn quyền</span>
                                <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                            <label class="inline-flex items-center justify-between cursor-pointer p-1 pl-10 pr-4 hover:bg-gray-100 hover:rounded-md">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <span class="ms-3 text-sm font-medium text-gray-900">Toàn quyền</span>
                                <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default SettingPermission;
