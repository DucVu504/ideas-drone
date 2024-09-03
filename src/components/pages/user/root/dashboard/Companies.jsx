"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';

import AddCompanyForm from '@/components/common/addCompanyForm/AddCompanyForm';
import Pagination from '@/components/common/pagination/Pagination';
import Overview from '@/components/pages/user/root/dashboard/Overview';
import ContainerWrapper from '@/components/pages/user/share/containerWrapper/ContainerWrapper';
import { postData } from '@/components/utils/UserApi';


const END_POINT = '/company/get-all'
const COUNT = 10;


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
        <ContainerWrapper>
            <Overview />
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
            <AddCompanyForm isOpen={isOpen} onClose={toggleModal} onAddCompany={addCompany} />
        </ContainerWrapper>
    );
};

export default Companies;
