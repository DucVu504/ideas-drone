"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LocaleSwitcher from "@/components/common/localeSwitcher/LocaleSwitcher";
import { useTranslation } from 'next-i18next';

const Links = () => {
    const { t } = useTranslation("common");
    const generalStyle = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-green-700 xl:p-0 "
    const generalStyleActive = "block py-2 px-3 text-green-500 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-green-700 xl:p-0"

    const currentPath = usePathname();

    const links = [
        {
            title: t("navbarHome.home"),
            path: "/",
            className: currentPath === "/" ? generalStyleActive : generalStyle,
        },
        {
            title: t("navbarHome.services"),
            path: "/services",
            className: currentPath === "/services" ? generalStyleActive : generalStyle,
        },
        {
            title: t("navbarHome.projects"),
            path: "/projects",
            className: currentPath === "/projects" ? generalStyleActive : generalStyle,
        },
        {
            title: t("navbarHome.equipments"),
            path: "/equipments",
            className: currentPath === "/equipments" ? generalStyleActive : generalStyle,
        },
        {
            title: t("navbarHome.about_us"),
            path: "/about",
            className: currentPath === "/about" ? generalStyleActive : generalStyle,
        },
        {
            title: t("navbarHome.contact"),
            path: "/contact",
            className: currentPath === "/contact" ? generalStyleActive : generalStyle,
        },
    ];

    return (
        <ul className="flex flex-col p-4 xl:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white">
            {links.map(link => (
                <Link href={link.path} key={link.title}>
                    <div className={link.className} aria-current="page">{link.title}</div>
                </Link>
            ))}
            <div className='px-2 xl:py-0 py-2'>
                <LocaleSwitcher />
            </div>
        </ul>
    );
};

export default Links;