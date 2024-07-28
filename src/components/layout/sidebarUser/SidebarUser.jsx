"use client"
import Image from "next/legacy/image"
import { usePathname } from 'next/navigation';

const SidebarAdmin = () => {
   const currentPath = usePathname();

   return (
         <div className='fixed mt-20'>
            <aside id="logo-sidebar" className=" top-0 left-0 z-40 w-36 pt-2 h-screen transition-transform -translate-x-full bg-white  sm:translate-x-0" aria-label="Sidebar">
               <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
                  <ul className="space-y-2 font-medium">
                     <li>
                        <a href="/user/projects" className={`flex flex-col items-center justify-center ${currentPath === '/user/projects' ? 'bg-green-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/project.svg" alt="Logo" width="50" height="50" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="mt-2 whitespace-nowrap text-sm">Dự án</span>
                        </a>
                     </li>

                     <li>
                        <a href="/user/profile" className={`flex flex-col items-center justify-center ${currentPath === '/user/profile' ? 'bg-green-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/user.svg" alt="Logo" width="50" height="50" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="mt-2 whitespace-nowrap text-sm">Hồ sơ</span>
                        </a>
                     </li>
                     <li>
                        <a href="/user/request" className={`flex flex-col items-center justify-center ${currentPath === '/user/request' ? 'bg-green-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/request.svg" alt="Logo" width="50" height="50" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="mt-2 whitespace-nowrap text-sm">Yêu cầu</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </aside>
         </div>
    );
  };
  
  export default SidebarAdmin;