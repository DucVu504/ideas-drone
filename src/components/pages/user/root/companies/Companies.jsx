"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';

import AddCompanyForm from '@/components/common/addCompanyForm/AddCompanyForm';
import slugify from '@/components/utils/Slugify';
import { postData } from '@/components/utils/UserApi';


function createFullAddress(addressLine1, addressLine2, city) {
    const parts = [addressLine1, addressLine2].filter(Boolean);
    return `${parts.join(', ')}, ${city}`;
}

const END_POINT = '/company/get-all'
const COUNT = 5;


const Companies = () => {
    const { t } = useTranslation("user_board");

    const requestBody = (page) => ({
        "page": page,
        "count": COUNT,
        "sort": [
            {
                "by": "name",
                "type": "asc"
            }
        ],
        "search": [
            {
                "by": "city",
                "value": ""
            }
        ]
    });


    // Call API to get companies
    // State to store fetched companies
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const router = useRouter();

    const handleCompanyClick = (path, companyId) => {
        router.push(`${path}?companyId=${companyId}`);
    };

    const fetchCompanies = async (page) => {
        const data = await postData(END_POINT, requestBody(page));

        setCompanies(data.Data.List);
        setTotalPages(Math.ceil(data.Data.Total / COUNT));
        setLoading(false);
    };
    // Fetch companies when the component mounts
    useEffect(() => {
        fetchCompanies(currentPage);
    }, [currentPage]);


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

    const addCompany = (newCompany) => {
        setCompanies([...companies, newCompany]);
    };

    return (
        <section className="bg-gray-50  p-3 sm:p-5 lg:ml-36">
            <div className="mx-auto max-w-screen-xl px-4 lg:mt-16">
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
                            <button type="button" onClick={toggleModal} className="flex items-center justify-center text-black bg-lime-300 hover:bg-lime-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2">
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                {t('company_table.add')}
                            </button>

                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-sm text-gray-700 uppercase bg-gradient-to-r from-lime-200 to-lime-100 ">
                                <tr>
                                    <th scope="col" className="px-4 py-3 w-72">
                                        <button type="button" onClick={() => requestSort('Name')}>
                                            {t('company_table.name')} {sortConfig.key === 'Name' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        <button type="button" onClick={() => requestSort('AddressLine1')}>
                                            {t('company_table.address')}  {sortConfig.key === 'AddressLine1' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-32">
                                        <button type="button" onClick={() => requestSort('Country')}>
                                            {t('company_table.country')} {sortConfig.key === 'Country' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-48">
                                        <button type="button" onClick={() => requestSort('ModifiedTime')}>
                                            {t('company_table.update_date')} {sortConfig.key === 'ModifiedTime' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-40">
                                        <button type="button" onClick={() => requestSort('IsDisabled')}>
                                            {t('company_table.status')} {sortConfig.key === 'IsDisabled' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-32">
                                        {t('company_table.users')}
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-24">
                                        {t('company_table.projects')}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedCompanies.map((company, index) => (
                                    <tr key={index} className="border-b hover:bg-slate-50">
                                        <th scope="row" className="px-4 py-3 w-12 font-medium text-gray-900">
                                            {company.name}
                                        </th>
                                        <td className="px-4 py-3">{createFullAddress(company.address_line_2, company.address_line_1, company.city)}</td>
                                        <td className="px-4 py-3">{company.country}</td>
                                        <td className="px-4 py-3">{new Date(company.modified_time).toLocaleDateString()}</td>
                                        <td className="px-4 py-3">
                                            <div className={`h-4 w-4 rounded-md ${company.IsDisabled ? 'bg-red-500' : 'bg-green-500'}`}></div>
                                        </td>
                                        <td className="px-6 py-3">
                                            <button
                                                className="border text-black hover:text-blue-700 px-2 py-1 rounded mr-2"
                                                onClick={() => handleCompanyClick(`/root/companies/users/${slugify(company.name)}`, company.id)}>
                                                {t('company_table.view')}
                                            </button>
                                        </td>
                                        <td className="px-6 py-3">
                                            <button
                                                className="border text-black hover:text-blue-700 px-2 py-1 rounded"
                                                onClick={() => handleCompanyClick(`/root/companies/projects/${slugify(company.name)}`, company.id)}>
                                                {t('company_table.view')}
                                            </button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
                <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                    <span class="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                        Showing <span class="font-semibold text-gray-900">{currentPage}</span> of <span class="font-semibold text-gray-900">{totalPages}</span>
                    </span>
                    <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <button
                                onClick={handlePrevious}
                                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                                Previous
                            </button>
                        </li>

                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`${currentPage === index + 1
                                    ? "flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                                    : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <li>
                            <button
                                onClick={handleNext}
                                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>

            </div>
            <AddCompanyForm isOpen={isOpen} onClose={toggleModal} onAddCompany={addCompany} />
        </section>
    );
};

export default Companies;
