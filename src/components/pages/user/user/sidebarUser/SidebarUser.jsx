"use client"
import Image from "next/legacy/image"
import { usePathname } from 'next/navigation';
import { useTranslation } from 'next-i18next';

const SidebarAdmin = () => {
   const { t } = useTranslation("common");
   const currentPath = usePathname();

   return (
         <div className='fixed mt-20'>
            <aside id="logo-sidebar" className=" top-0 left-0 z-40 rounded-r-2xl laptop:w-52  pt-2 h-screen transition-transform -translate-x-full bg-white  sm:translate-x-0" aria-label="Sidebar">
               <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
                  <ul className="space-y-2 font-medium">
                     <li>
                        <a href="/user/dashboard" className={`flex flex-row items-center justify-left ${currentPath === '/user/dashboard' ? 'bg-green-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/dashboard.svg" alt="Logo" width="40" height="40" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="hidden laptop:block pl-4 mt-2 whitespace-nowrap text-sm">{t('sidebarUser.dashboard')}</span>
                        </a>
                     </li>

                     <li>
                        <a href="/user/profile" className={`flex flex-row items-center justify-left ${currentPath === '/user/profile' ? 'bg-green-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/setting_1.svg" alt="Logo" width="40" height="40" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="hidden laptop:block pl-4 mt-2 whitespace-nowrap text-sm">{t('sidebarUser.setting')}</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </aside>
         </div>
    );
  };
  
  export default SidebarAdmin;