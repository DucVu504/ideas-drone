"use client"
import Image from "next/legacy/image"
import { usePathname } from 'next/navigation';

const SidebarRoot = () => {
   const currentPath = usePathname();

   return (
         <div className='fixed mt-20'>
            <aside id="logo-sidebar" className=" top-0 left-0 z-40 w-36 pt-2 h-screen transition-transform -translate-x-full bg-white  sm:translate-x-0" aria-label="Sidebar">
               <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
                  <ul className="space-y-2 font-medium">
                     <li>
                        <a href="/root/companies" className={`flex flex-col items-center justify-center ${currentPath === '/root/companies' ? 'bg-green-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/company.svg" alt="Logo" width="50" height="50" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="mt-2 whitespace-nowrap text-sm">Công ty</span>
                        </a>
                     </li>

                     <li>
                        <a href="/root/all-projects" className={`flex flex-col items-center justify-center ${currentPath === '/root/all-projects' ? 'bg-green-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/projects.svg" alt="Logo" width="50" height="50" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="mt-2 whitespace-nowrap text-sm"> Dự án</span>
                        </a>
                     </li>
                     <li>
                        <a href="/root/all-users" className={`flex flex-col items-center justify-center ${currentPath === '/root/all-users' ? 'bg-green-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/users.svg" alt="Logo" width="50" height="50" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="mt-2 whitespace-nowrap text-sm"> Người dùng</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </aside>
         </div>
    );
  };
  
  export default SidebarRoot;
  