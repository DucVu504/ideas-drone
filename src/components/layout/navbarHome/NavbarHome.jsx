import React, { useState, useEffect } from 'react';
import Links from "./Link";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./navbar.module.css";
import { useTranslation } from 'next-i18next';

const NavbarHome = () => {
    const { t } = useTranslation("common");
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80); // Update state based on scroll position
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup
        };
    }, []); // Empty dependency array to run only once on component mount

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`${styles['nav-container']} bg-opacity-5`}>
            <nav className={`bg-white w-full top-0 start-0 border-b border-gray-200 relative z-10 px-8`}>
                <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-1">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src="/images/common/Logo_main.png" className="h-14 w-auto p-1" alt="DroneGIS Logo" width={150} height={50} />
                    </a>
                    <div className="flex items-center xl:order-2 space-x-3 xl:space-x-3 rtl:space-x-reverse">
                        <button type="button" className="w-28 text-black border-green-500 border hover:bg-green-500 shadow-md font-medium rounded-lg text-sm px-4 py-2 text-center">
                            <Link href="/login">{t('navbarHome.login')}</Link>
                        </button>
                        <button type="button" className="w-32 text-white bg-green-500 border border-green-500 bg-gradient-to-r hover:from-green-500 hover:to-lime-300 font-medium rounded-lg shadow-md text-sm px-4 py-2 text-center">
                            <Link href="/quotes">{t('navbarHome.quote')}</Link>
                            
                        </button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded={isMenuOpen} onClick={toggleMenu}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`xl:flex flex-col items-center justify-center w-full xl:w-auto xl:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                        <Links />
                    </div>
                </div>
            </nav>
        </nav>
    );
};

export default NavbarHome;
