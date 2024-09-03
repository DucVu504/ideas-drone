"use client"
import { useState, useEffect } from 'react';
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
    <div>
      <div className="bg-gray-50">
        <div className="w-full mx-auto p-2 space-y-2">
          <form class=" max-w-md">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500" placeholder="Search Mockups, Logos..." required />
              <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
          </form>
        <div className = "laptop:h-[550px] desktop:h-[650px] overflow-y-auto">
          {projects.map((product, index) => (
            <div
              key={index}
              className="flex items-center mt-2 justify-between bg-white p-4 shadow rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div>
                <h2 className="text-gray-800 font-semibold py-2">{product.name}</h2>
                <p className="text-gray-600 text-xs">{product.address}</p>
                <p className="text-gray-600 text-xs">Ngày cập nhật: 10/07/1998</p>
                <p className="text-gray-600 text-xs">Số bản cập nhật: 3</p>
              </div>
              <Image src={product.image} alt={product.name} width={120} height={120} className="rounded-lg" />
            </div>
          ))}
        </div>


      </div>
      </div>
    </div>
  );
};

export default Projects;
