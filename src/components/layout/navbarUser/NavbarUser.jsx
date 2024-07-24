import Image from "next/legacy/image"
// import LanguageSwicher from '@/components/common/languageSwicher/LanguageSwicher';
const NavbarUser = () => {

    return (
    
        <nav className="fixed content-center h-16 w-full bg-white border-b border-gray-200">
            <div className="flex justify-between items-center px-10">
                <a href="/">
                <Image src="/images/common/Logo_main.png" alt="Home" width={150} height={50} className="items-center" />
                </a>
                <div className="flex items-center space-x-4 border rounded-md py-1 px-2 shadow-md">
                    <p>Vũ Văn Đức</p>
                <img className="w-8 h-8 rounded-md" src="/images/common/default_avartar.jpg" alt="user photo"/>
                </div>

            </div>
        </nav>
  
    );
  };
  
  export default NavbarUser;
  