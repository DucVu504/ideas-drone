"use client";
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from "next/legacy/image";
import Link from 'next/link';
import ActionButton from '@/components/common/actionButton/ActionButton';
import NavRoute from '@/components/pages/user/share/navRoute/NavRoute';
import Pagination from '@/components/common/pagination/Pagination';
import { postData } from '@/components/utils/ProjectApi';
import AddProjectForm from '@/components/common/addProjectForm/AddProjectForm';

const END_POINT = '/project/get-all';
const COUNT = 4;
const DEFAULT_AVATAR_SRC = '/images/common/projects.png';

const CompanyProjects = ({backRoute}) => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const companyId = searchParams.get('company_id');

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);


    const fetchProjects = useCallback(async (page) => {
        setLoading(true);
        const response = await postData(END_POINT, {
            page,
            count: COUNT,
            sort: [{ by: "name", type: "asc" }],
        });
        setProjects(response.Data.List);
        setTotalPages(Math.ceil(response.Data.Total / COUNT));
        setLoading(false);
    }, []);


    useEffect(() => {
        fetchProjects(currentPage);
    }, [currentPage, fetchProjects]);

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };


    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleEditClick = (id) => {
      router.push(`/edit/${id}`);
    };

    return (
        <section className="bg-gray-50 p-3 sm:p-5 lg:ml-36">
            <div className="mx-auto max-w-screen-xl px-4 lg:mt-16">
                <div className="bg-white shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between p-4 space-y-3 md:space-y-0 md:space-x-4">
                        <NavRoute backRoute = {backRoute} origin = "CÔNG TY" target = "Dự án"/>
                        <div className="flex justify-end items-center space-x-3">
                            <button 
                                type="button" 
                                onClick={toggleModal} 
                                className="flex items-center text-black bg-lime-300 hover:bg-lime-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2"
                            >
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                THÊM DỰ ÁN
                            </button>
                        </div>
                    </div>
                    <div className="p-4 space-y-4">
                        {projects.map((project, index) => (
                            <div key={index} className="flex items-center justify-between bg-white p-4 shadow rounded-lg border border-gray-200 hover:bg-gray-50">
                                <div className="flex items-center w-1/2 space-x-4">
                                    <Image src={DEFAULT_AVATAR_SRC} alt={project.name} width={100} height={100} className="rounded-lg bg-gray-200" />
                                    <div>
                                        <h2 className="text-lg text-gray-800 font-semibold py-2">{project.name}</h2>
                                        <p className="text-gray-600 text-sm">Last update date: {new Date(project.modified_time).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-8">
                                    <div className="flex flex-col items-left space-y-4">
                                        <p className="text-gray-500 text-sm"><span className="text-blue-500 font-bold">| </span>Số bản cập nhật</p>
                                        <p className="text-gray-800 px-2 text-sm">0</p>
                                    </div>
                                    <div className="flex flex-col items-left space-y-4">
                                        <p className="text-gray-500 text-sm"><span className="text-yellow-500 font-bold">| </span>Mức độ chia sẻ</p>
                                        <p className="text-gray-800 px-2 text-sm">Công khai</p>
                                    </div>
                                    <div className="flex flex-col items-left space-y-4">
                                        <p className="text-gray-500 text-sm"><span className="text-fuchsia-400 font-bold">| </span>Định dạng</p>
                                        <p className="text-gray-800 px-2 text-sm">Chưa làm</p>
                                    </div>
                                </div>
                                <div>
                                    <ActionButton rowIndex={index} onEdit={() => handleEditClick(index)} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                    handlePrevious={handlePrevious}
                    handleNext={handleNext}
                />
            </div>
            <AddProjectForm isOpen={isOpen} onClose={toggleModal} />
        </section>
    );
};

export default CompanyProjects;
