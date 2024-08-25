"use client"
import Image from "next/legacy/image"
import { usePathname } from 'next/navigation';
import { useTranslation } from 'next-i18next';

const SidebarRoot = () => {
   const currentPath = usePathname();
   const { t } = useTranslation("common");

   return (
         <div className='fixed mt-20'>
            <aside id="logo-sidebar" className=" top-0 left-0 z-40 w-52 pt-2 h-screen transition-transform -translate-x-full bg-white  sm:translate-x-0" aria-label="Sidebar">
               <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
                  <ul className="space-y-2 font-medium">
                     <li>
                        <a href="/root/dashboard" className={`flex flex-row items-center justify-left ${currentPath === '/root/dashboard' ? 'bg-lime-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/dashboard.svg" alt="Logo" width="40" height="40" className="border p-1 border-green-800 rounded-lg" />
                           <span className="pl-4 mt-2 whitespace-nowrap text-sm">{t('sidebarRoot.dashboard')}</span>
                        </a>
                     </li>
                     <li>
                        <a href="/root/companies" className={`flex flex-row items-center justify-left ${currentPath === '/root/companies' ? 'bg-lime-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/company.svg" alt="Logo" width="40" height="40" className="border p-1 border-green-300 rounded-lg" />
                           <span className="pl-4 mt-2 whitespace-nowrap text-sm">{t('sidebarRoot.company')}</span>
                        </a>
                     </li>
                     <li>
                        <a href="/root/projects" className={`flex flex-row items-center justify-left ${currentPath === '/root/projects' ? 'bg-lime-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/projects.svg" alt="Logo" width="40" height="40" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="pl-4 mt-2 whitespace-nowrap text-sm"> {t('sidebarRoot.projects')}</span>
                        </a>
                     </li>
                     <li>
                        <a href="/root/users" className={`flex flex-row items-center justify-left ${currentPath === '/root/users' ? 'bg-lime-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/users.svg" alt="Logo" width="40" height="40" className="border p-1 border-gray-300 rounded-lg" />
                           <span className="pl-4 mt-2 whitespace-nowrap text-sm"> {t('sidebarRoot.users')}</span>
                        </a>
                     </li>
                     <li>
                        <a href="/root/role-permission" className={`flex flex-row items-center justify-left ${currentPath === '/root/role-permission' ? 'bg-lime-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/permission.svg" alt="Logo" width="40" height="40" className="border p-1 border-green-800 rounded-lg" />
                           <span className="pl-4 mt-2 whitespace-nowrap text-sm">{t('sidebarRoot.permission')}</span>
                        </a>
                     </li>
                     <li>
                        <a href="/root/setting" className={`flex flex-row items-center justify-left ${currentPath === '/root/setting' ? 'bg-lime-100' : ''} border-b border-gray-300 p-2 text-gray-900 rounded-lg hover:bg-gray-200 group`}>
                           <Image src="/icons/common/setting_1.svg" alt="Logo" width="40" height="40" className="border p-1 border-green-800 rounded-lg" />
                           <span className="pl-4 mt-2 whitespace-nowrap text-sm">{t('sidebarRoot.setting')}</span>
                        </a>
                     </li>

                  </ul>
               </div>
            </aside>
         </div>
    );
  };
  
  export default SidebarRoot;
  