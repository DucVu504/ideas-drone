"use client"
import React, { useState, useEffect } from 'react';
import Links from "./Link"
import Link from "next/link"
import Image from "next/image"
import styles from "./navbar.module.css"

const NavbarHome = () => {
    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 80); // Update state based on scroll position
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll); // Cleanup
      };
    }, []); // Empty dependency array to run only once on component mount
    
    return (
      <nav className={`${styles[`nav-container`]} bg-opacity-5`}>
        <nav className={`bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 relative z-10 px-8`}>
          <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-1">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse ">
              <Image src="/images/common/Logo_main.png" className="h-14 w-auto p-1" alt="DroneGIS Logo" width={200} height={50} />
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse">
              <button type="button" className="text-black border border-green-700 hover:border-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
              <Link href="/login">Đăng nhập</Link>
              </button>
              <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Nhận báo giá</button>
              <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col  items-center justify-center hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <Links />
            </div>
          </div>
        </nav>
      </nav>
    );
  };
  

export default NavbarHome