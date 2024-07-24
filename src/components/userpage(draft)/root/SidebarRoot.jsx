"use client"
import Image from "next/legacy/image"
import { usePathname } from 'next/navigation';

const Sidebar = () => {
   const currentPath = usePathname();

   return (
         <div className='fixed mt-20'>
            <aside id="logo-sidebar" className=" top-0 left-0 z-40 w-36 pt-2 h-screen transition-transform -translate-x-full bg-yellow-200  sm:translate-x-0" aria-label="Sidebar">
               <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
                  <ul className="space-y-2 font-medium">
                     <li>
                        <a href="/user/projects" className={`flex flex-col items-center justify-center ${currentPath === '/user/projects' ? 'bg-green-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/project.svg" alt="Logo" width="50" height="50" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="mt-2 whitespace-nowrap text-sm">Dự án</span>
                        </a>
                     </li>
                     <li>
                        <a href="/user/contact" className={`flex flex-col items-center justify-center ${currentPath === '/user/contact' ? 'bg-green-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/contact.svg" alt="Logo" width="50" height="50" className="border p-1 border-gray-300 rounded-lg"/>
                           <span className="mt-2 whitespace-nowrap text-sm">Liên hệ</span>
                        </a>
                        </li>
                        <li>
                        <a href="/user/account" className={`flex flex-col items-center justify-center ${currentPath === '/user/account' ? 'bg-green-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/user.svg" alt="Logo" width="50" height="50" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="mt-2 whitespace-nowrap text-sm">Tài khoản</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </aside>
         </div>
    );
  };
  
  export default Sidebar;
  