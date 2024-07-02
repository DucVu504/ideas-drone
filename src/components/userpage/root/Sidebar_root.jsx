"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const Sidebar = () => {

   const currentPath = usePathname();
   return (
         <div className='fixed'>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className=" inline-flex items-center p-2 w-48 text-sm text-gray-500  sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 h-14">
               <span className="sr-only">Open sidebar</span>
               <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
               </svg>
            </button>
            <aside id="logo-sidebar" className=" top-0 left-0 z-40 w-52 pt-2 h-screen transition-transform -translate-x-full bg-white  sm:translate-x-0" aria-label="Sidebar">
               <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
                  <ul className="space-y-2 font-medium">
                     <li className="flex justify-center border-b border-gray-300 pb-2 ">
                     <p className='flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-300 text-2xl text-gray-800 p-2 rounded-md w-52'>
                        ROOT
                     </p>
                     </li>
                     <li>
                     <a href="/user-admin/dashboard" className={`flex items-center ${currentPath === '/user-admin/dashboard' ? 'bg-green-100' : ''} border-b border-gray-300 p-6 text-gray-900 rounded-lg hover:bg-gray-200  group`}>
                           <Image src="../UserPages/Icons/project.svg" alt="Logo" width="50" height="50" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="flex-1 ms-3 whitespace-nowrap">Công ty</span>
                           
                        </a>
                     </li>
                     <li>
                     <a href="/user-admin/account" className={`flex items-center ${currentPath === '/user-admin/account' ? 'bg-green-100' : ''} border-b border-gray-300 p-6 text-gray-900 rounded-lg hover:bg-gray-200  group`}>
                        <Image src="../UserPages/Icons/user.svg" alt="Logo" width="50" height="50" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="flex-1 ms-3 whitespace-nowrap">Dự án</span>
                        </a>
                     </li>
                     <li>
                     <a href="/user-admin/setting" className={`flex items-center ${currentPath === '/user-admin/setting' ? 'bg-green-100' : ''} border-b border-gray-300 p-6 text-gray-900 rounded-lg hover:bg-gray-200  group`}>
                        <Image src="../UserPages/Icons/setting.svg" alt="Logo" width="50" height="50" className="border p-1 border-gray-300 rounded-lg"/>
                           <span className="flex-1 ms-3 whitespace-nowrap">Người dùng</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </aside>
         </div>
    );
  };
  
  export default Sidebar;
  