"use client"
import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';

import Pagination from '@/components/common/pagination/Pagination';
import SearchByCategories from '@/components/common/searchByCategories/SearchByCategories';
import Overview from '@/components/pages/user/root/dashboard/Overview';
import ContainerWrapper from '@/components/pages/user/share/containerWrapper/ContainerWrapper';
import { postData } from '@/components/utils/UserApi';


const END_POINT = '/company/get-all'
const COUNT = 10;


const Companies = () => {
    const { t } = useTranslation("user_board");
    const categories = {
        "Name": 'name',
        "City": 'city',
        "Country": 'country',
        "Update date": 'modified_time',
        "Status": 'is_disabled'
    };
    const router = useRouter();

    // State management
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
    const [isOpen, setIsOpen] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState({
        key: '',
        value: ''
    });

    // Fetch companies
    const fetchCompanies = useCallback(async (page, query = '') => {
        setLoading(true);
        console.log(query);
        try {
            const data = await postData(END_POINT, {
                page,
                count: COUNT,
                sort: [{ by: "name", type: "asc" }],
                search: query ? [{ by: query.key, value: query.value }] : []
            });

            setCompanies(data.Data.List);
            setTotalPages(Math.ceil(data.Data.Total / COUNT));
        } catch (error) {
            console.error("Failed to fetch companies", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchCompanies(currentPage);
    }, [currentPage, fetchCompanies]);

    // Search handler
    const handleSearch = useCallback(() => {
        setIsSearching(true);
        fetchCompanies(1, searchQuery);  // Call API with search query
        setCurrentPage(1);  // Reset to the first page
    }, [searchQuery, fetchCompanies]);

    // Clear search
    const handleClearSearch = useCallback(() => {
        setSearchQuery('');  // Clear search query
        setIsSearching(false);
        fetchCompanies(1);  // Fetch all companies again
        setSearchQuery({ key: '', value: '' });
    }, [fetchCompanies]);

    // Sorting
    const sortedCompanies = useMemo(() => {
        const sorted = [...companies];
        sorted.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        return sorted;
    }, [companies, sortConfig]);

    const requestSort = useCallback((key) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'ascending' ? 'descending' : 'ascending'
        }));
    }, []);

    // Handlers
    const handleNext = useCallback(() => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    }, [currentPage, totalPages]);

    const handlePrevious = useCallback(() => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    }, [currentPage]);
    return (
        <ContainerWrapper>
            <Overview />
            <div className="w-full md:w-1/2 pb-4">
                <SearchByCategories
                    categories={categories}
                    onSearch={handleSearch}
                    searchQuery={searchQuery}  // Pass searchQuery
                    setSearchQuery={setSearchQuery}  // Pass setSearchQuery
                />
                {isSearching && (
                    <div className="flex justify- mt-2">
                        <button onClick={handleClearSearch} className="flex items-center text-red-300 hover:text-red-600 text-sm p-2">
                            <svg
                                className="w-5 h-5 mr-2 bg-red-200 rounded-md"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                            Clear search
                        </button>
                    </div>
                )}
            </div>
            <div className="bg-white shadow-md sm:rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-sm text-gray-700 uppercase bg-gradient-to-r from-lime-200 to-lime-100 ">
                            <tr>
                                <th scope="col" className="px-4 py-3 w-72">
                                    <button type="button" onClick={() => requestSort('Name')}>
                                        {t('company_table.name')} {sortConfig.key === 'Name' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3 w-48">
                                    <button type="button" onClick={() => requestSort('AddressLine1')}>
                                        {t('company_table.address')}  {sortConfig.key === 'AddressLine1' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3 w-48">
                                    <button type="button" onClick={() => requestSort('Country')}>
                                        {t('company_table.country')} {sortConfig.key === 'Country' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3 w-48">
                                    <button type="button" onClick={() => requestSort('ModifiedTime')}>
                                        {t('company_table.update_date')} {sortConfig.key === 'ModifiedTime' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3 w-32">
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
                                    <td className="px-4 py-3">{company.city}</td>
                                    <td className="px-4 py-3">{company.country}</td>
                                    <td className="px-4 py-3">
                                        {company.modified_time ? new Date(company.modified_time).toLocaleDateString() : t('company_table.not_yet_update')}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className={`h-4 w-4 rounded-md ${company.IsDisabled ? 'bg-red-500' : 'bg-green-500'}`}></div>
                                    </td>
                                    <td className="px-6 py-3">
                                        100
                                    </td>
                                    <td className="px-6 py-3">
                                        234
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
            />
        </ContainerWrapper>
    );
};

export default Companies;
