"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from "./Link.module.css"

const Links = () => {
    const generalStyle = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    const generalStyleActive = "block py-2 px-3 text-green-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green-500 md:dark:hover:bg-transparent dark:border-gray-700"

    const currentPath = usePathname();
    console.log("path name is" +currentPath)


    const links = [
        {
            title: "Trang chủ",
            path: "/",
            className: currentPath === "/" ? generalStyleActive : generalStyle,
        },
        {
            title: "Dịch vụ",
            path: "/our-services",
            className: currentPath === "/our-services" ? generalStyleActive : generalStyle,
        },
        {
            title: "Dự án",
            path: "/our-projects",
            className: currentPath === "/our-projects" ? generalStyleActive : generalStyle,
        },
        {
            title: "Trang bị",
            path: "/our-equipments",
            className: currentPath === "/our-equipments" ? generalStyleActive : generalStyle,
        },
        {
            title: "Về chúng tôi",
            path: "/about-us",
            className: currentPath === "/about-us" ? generalStyleActive : generalStyle,
        },
        {
            title: "Liên hệ",
            path: "/contact-us",
            className: currentPath === "/contact-us" ? generalStyleActive : generalStyle,
        },
    ];

    return (
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {links.map(link => (
                    <Link href={link.path} key={link.title}>
                        <div className={link.className} aria-current="page">{link.title}</div>
                    </Link>
                ))}
            </ul>
    );
};

export default Links;