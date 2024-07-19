"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import AddCompanyForm from '../../../../common/addCompanyForm/AddCompanyForm';



const fetchCompanies = async () => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

const Companies = () => {
    
    // Call API to get companies
    // State to store fetched companies
    const [companies_test, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch companies when the component mounts
    useEffect(() => {
        const getCompanies = async () => {
        const data = await fetchCompanies();
        setCompanies(data);
        setLoading(false);
        };

        getCompanies();
    }, []);


    //TODO: Replace the following mock data with the real data from the API
    const companies = [
        { name: 'CÔNG TY CỔ PHẦN BÁCH VIỆT', slug: "bach-viet", country: '🇻🇳', address: '153 Ung văn Khiêm phương 25 quận Bình Thạnh, TPHCM', modified_time: '02/07/2024', is_disable: true },
        { name: 'CÔNG TY TNHH 1 THÀNH VIÊN IDEASDRONE',slug: "ideas-drone", country: '🇻🇳', address: '380 Nguyễn Thị Tú phương Bình Hưng Hoà B quận Bình Tân', modified_time: '200', is_disable: false },
        ];
        
    // Handle sorting
    const [sortConfig, setSortConfig] = useState({ key: 'companyName', direction: 'ascending' });
    const sortedCompanies = [...companies].sort((a, b) => {
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


    // Control Add Company Modal
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };


    return (
        <section className="bg-gray-50  p-3 sm:p-5">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2" placeholder="Search" required="" />
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <button type="button" onClick={toggleModal}  className="flex items-center justify-center text-black bg-lime-300 hover:bg-lime-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2">
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                THÊM CÔNG TY
                            </button>

                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-sm text-gray-700 uppercase bg-gradient-to-r from-lime-200 to-lime-100 ">
                                <tr>
                                    <th scope="col" className="px-4 py-3">
                                        <button type="button" onClick={() => requestSort('name')}>
                                            TÊN CÔNG TY {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[130px]">
                                        <button type="button" onClick={() => requestSort('country')}>
                                            QUỐC GIA {sortConfig.key === 'country' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        <button type="button" onClick={() => requestSort('address')}>
                                            ĐỊA CHỈ {sortConfig.key === 'address' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[180px]">
                                        <button type="button" onClick={() => requestSort('modified_time')}>
                                            NGÀY CẬP NHẬT {sortConfig.key === 'modified_time' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[150px]">
                                        <button type="button" onClick={() => requestSort('is_disable')}>
                                            TRẠNG THÁI {sortConfig.key === 'is_disable' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[130px]">
                                            NGƯỜI DÙNG
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[100px]">
                                            DỰ ÁN
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {sortedCompanies.map((company, index) => (
                                    <tr key={index} className="border-b hover:bg-slate-50">
                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                                            {company.name}
                                        </th>
                                        <td className="px-4 py-3">{company.country}</td>
                                        <td className="px-4 py-3">{company.address}</td>
                                        <td className="px-4 py-3">{company.modified_time}</td>
                                        <td className="px-4 py-3">
                                            <div className={`h-4 w-4 rounded-md ${company.is_disable ? 'bg-red-500' : 'bg-green-500'}`}></div>
                                        </td>
                                        <td className="px-6 py-3">
                                            <Link href={`/root/companies/users/${company.slug}`} passHref>
                                                <button
                                                className="border text-black hover:text-blue-700 px-2 py-1 rounded mr-2">
                                                Xem
                                                </button>
                                            </Link>
                                        </td>
                                        <td className="px-6 py-3">
                                            <Link href={`/root/companies/projects/${company.slug}`} passHref>
                                            <button
                                             className="border text-black hover:text-blue-700 px-2 py-1 rounded">
                                                Xem
                                            </button>
                                            </Link>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
            <AddCompanyForm isOpen={isOpen} onClose={toggleModal} />
        </section>
    );
};

export default Companies;