import Image from "next/legacy/image"
const Navbar = () => {

    return (
    
        <nav className="content-center z-50 h-16 w-full bg-white border-b border-gray-200">
            <div className="flex justify-between items-center px-10">
                <a href="/">
                <Image src="/images/common/Logo_main.png" alt="Home" width={130} height={30} className="items-center" />
                </a>
                <div className="flex items-center space-x-4 border rounded-md py-1 px-2 shadow-md">
                <p>Vũ Văn Đức</p>
                <Image src="/UserPages/Profile/default.jpg" alt="user photo" width={32} height={32} className="rounded-md" />
                </div>
            </div>
        </nav>
  
    );
  };
  
  export default Navbar;
  