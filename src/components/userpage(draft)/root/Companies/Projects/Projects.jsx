"use client"
import { useState} from 'react';
import { useRouter } from 'next/navigation';
import { FaUserTie, FaUserEdit, FaUser } from 'react-icons/fa';
import ActionButton from './ActionButton';
import AddProject from './AddProject';
import EditProject from './EditProject';
import Image from "next/legacy/image";


const Projects = () => {
    const [sortConfig, setSortConfig] = useState({ key: 'productName', direction: 'ascending' });

    const products = [
        {
          image: '/Homepage/ProjectPictures/picture1.jpg', // Update with the actual image path
          name: 'Dự án trung ương số 01',
          address: '01 Nguyễn Đình Chiểu - Quận 1 Tp.HCM',
          num_of_updated: 2,
          date_updated: "14/07/2024",
          format: "3DTiles",
        },
        {
          image: '/Homepage/ProjectPictures/picture3.jpg', // Update with the actual image path
          name: 'Dự án cải tạo đường Ung Văn Khiêm',
          address: '153 Ung Văn Khiêm - Quận Bình Thạnh Tp.HCM',
          num_of_updated: 4,
          date_updated: "14/07/2024",
          format: "3DTiles",
        },
        {
          image: '/Homepage/ProjectPictures/picture6.jpg', // Update with the actual image path
          name: 'Dự án khu đô thị quận 9, khu công nghệ cao',  
          address: '177 Đỗ Xuân Hợp - Quận 9 Tp.HCM',
          num_of_updated: 1,
          date_updated: "14/07/2024",
          format: "3DTiles",
        },
      ];

    const totalRows = products.length;

    const sortedProducts = [...products].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const router = useRouter();

    const handleEditClick = (id) => {
      router.push(`/edit/${id}`);
    };
  
    const handleViewClick = (id) => {
      router.push(`/view/${id}`);
    };

    // Control Add User Modal
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
  
    const handleEditUserClick = (user) => {
      setCurrentUser(user);
      setIsEditing(true);
    };

    return (
        <section className="bg-gray-50  p-3 sm:p-5">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="flex items-center p-2 space-x-2 text-sm text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm sm:text-base  sm:space-x-4 ">
                            <li className="flex items-center hover:text-blue-600 ">
                                CÔNG TY IDEASDRONE
                                <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                                </svg>
                            </li>
                            <li className="flex items-center">
                                Dự án
                            </li>
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <button type="button" onClick={toggleModal} className="flex items-center justify-center text-black bg-lime-300 hover:bg-lime-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2">
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                THÊM DỰ ÁN
                            </button>

                        </div>
                    </div>
                    <div className="w-full mx-auto p-4 space-y-4">
                    {products.map((product, index) => (
                        <div
                        key={index}
                        className="flex items-center justify-between bg-white p-4 shadow rounded-lg border border-gray-200 hover:bg-gray-50"
                        >
                        <div className="flex items-center w-1/2 space-x-4">
                            <Image src={product.image} alt={product.name} width={120} height={120} className="rounded-lg" />
                            <div>
                                <h2 className="text-lg text-gray-800 font-semibold py-2">{product.name}</h2>
                                <p className="text-gray-600 text-sm">{product.address}</p>
                            </div>
                        </div>
                        <div className="flex space-x-8">
                            <div className="flex flex-col items-left space-y-4">
                            <p className="text-gray-500 text-sm"><span className="text-blue-500 font-bold">| </span>Số bản cập nhật</p>
                            <p className="text-gray-800 px-2 text-sm">{product.num_of_updated}</p>
                            </div>
                            <div className="flex flex-col items-left space-y-4">
                            <p className="text-gray-500 text-sm"><span className="text-yellow-500 font-bold">| </span>Ngày cập nhật</p>
                            <p className="text-gray-800 px-2 text-sm">{product.date_updated}</p>
                            </div>
                            <div className="flex flex-col items-left space-y-4">
                            <p className="text-gray-500 text-sm"><span className="text-fuchsia-400 font-bold">| </span>Định dạng</p>
                            <p className="text-gray-800 px-2 text-sm">{product.format}</p>
                            </div>
                        </div>
                        <div>
                            <ActionButton rowIndex={index} totalRows={totalRows} onEdit={() => handleEditUserClick(users)}/>
                        </div>
                        </div>
                    ))}
                    </div>

                    
                </div>
            </div>
            {isEditing && <EditProject user={currentUser} onClose={() => setIsEditing(false)} />}
            <AddProject isOpen={isOpen} onClose={toggleModal} />
        </section>
    );
};

export default Projects;
