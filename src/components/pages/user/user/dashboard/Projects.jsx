"use client"
import { useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/legacy/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';


const Projects = () => {
    const { t } = useTranslation("user_board");
    const [sortConfig, setSortConfig] = useState({ key: 'productName', direction: 'ascending' });

    const projects = [
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

    const totalRows = projects.length;

    const sortedProjects = [...projects].sort((a, b) => {
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
        <section className="bg-gray-50  p-3 sm:p-5 lg:ml-36">
            <div className="mx-auto max-w-screen-xl px-4 lg:mt-4">
                <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="w-full mx-auto p-4 space-y-4">
                    {projects.map((product, index) => (
                        <div
                        key={index}
                        className="flex items-center justify-between bg-white p-4 shadow rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-xl transition duration-300 ease-in-out"
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
                            <p className="text-gray-500 text-sm"><span className="text-blue-500 font-bold">| </span>{t('project_table.update_num')}</p>
                            <p className="text-gray-800 px-2 text-sm">{product.num_of_updated}</p>
                            </div>
                            <div className="flex flex-col items-left space-y-4">
                            <p className="text-gray-500 text-sm"><span className="text-yellow-500 font-bold">| </span>{t('project_table.update_date')}</p>
                            <p className="text-gray-800 px-2 text-sm">{product.date_updated}</p>
                            </div>
                            <div className="flex flex-col items-left space-y-4">
                            <p className="text-gray-500 text-sm"><span className="text-fuchsia-400 font-bold">| </span>{t('project_table.type')}</p>
                            <p className="text-gray-800 px-2 text-sm">{product.format}</p>
                            </div>
                        </div>
                          <div className='border px-4 py-8 rounded-r-md hover:text-blue-500'>
                            <Link href={`/user/projects/demo`}>
                              <FontAwesomeIcon icon={faDoorOpen} />
                            </Link>
                          </div>
                        </div>
                    ))}
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default Projects;
