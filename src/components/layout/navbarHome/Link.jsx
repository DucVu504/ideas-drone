
"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LocaleSwitcher from "@/components/common/localeSwitcher/LocaleSwitcher";
import { useTranslation } from 'next-i18next';

const Links = () => {
    const { t } = useTranslation("common");
    const generalStyle = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 "
    const generalStyleActive = "block py-2 px-3 text-green-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0"

    const currentPath = usePathname();
    console.log("path name is" +currentPath)


    const links = [
        {
            title: t("navbarHome.home"),
            path: "/",
            className: currentPath === "/" ? generalStyleActive : generalStyle,
        },
        {
            title: t("navbarHome.services"),
            path: "/our-services",
            className: currentPath === "/our-services" ? generalStyleActive : generalStyle,
        },
        {
            title: t("navbarHome.projects"),
            path: "/our-projects",
            className: currentPath === "/our-projects" ? generalStyleActive : generalStyle,
        },
        {
            title: t("navbarHome.equipments"),
            path: "/our-equipments",
            className: currentPath === "/our-equipments" ? generalStyleActive : generalStyle,
        },
        {
            title: t("navbarHome.about_us"),
            path: "/about_us",
            className: currentPath === "/about-us" ? generalStyleActive : generalStyle,
        },
        {
            title: t("navbarHome.contact"),
            path: "/contact-us",
            className: currentPath === "/contact-us" ? generalStyleActive : generalStyle,
        },
    ];

    return (
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                {links.map(link => (
                    <Link href={link.path} key={link.title}>
                        <div className={link.className} aria-current="page">{link.title}</div>
                    </Link>
                ))}
                <LocaleSwitcher/>
            </ul>
    );
};

export default Links;