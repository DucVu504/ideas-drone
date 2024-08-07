"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Image from "next/legacy/image";
import LocaleSwitcher from "@/components/common/localeSwitcher/LocaleSwitcher";
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

const NavbarUser = () => {
  const { t } = useTranslation("user_board");
  const [userName, setUserName] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const storedUserName = localStorage.getItem("username");
    setUserName(storedUserName || '');
  }, []);

  const getInitials = (name) => {
    if (!name) return '';
    return name.charAt(0).toUpperCase();
  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    // Redirect to home page
    window.location.href = '/';
  };

  return (
    <nav className="fixed content-center h-16 w-full bg-white border-b border-gray-200">
      <div className="flex justify-between items-center px-10">
        <a href="/">
          <Image
            src="/images/common/Logo_main.png"
            alt="Home"
            width={150}
            height={50}
            className="items-center"
          />
        </a>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <LocaleSwitcher />
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faBell} className="h-6 w-6 text-gray-700" />
            <div className="absolute top-0 right-0 h-2 w-2 bg-red-600 rounded-full"></div>
          </div>
          <div className="relative">
            <div
              className="flex items-center space-x-4 border rounded-md py-1 px-2 shadow-md cursor-pointer"
              onClick={() => setMenuVisible(!menuVisible)}
            >
              <p className="uppercase">{userName}</p>
              <div
                className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-md text-white font-bold"
              >
                {getInitials(userName)}
              </div>
            </div>
            {menuVisible && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg">
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500"
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                  {t('logout')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
