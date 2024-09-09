"use client";
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaUserTie, FaUserEdit, FaUser } from 'react-icons/fa';
import ActionButton from '@/components/common/actionButton/ActionButton';
import AddUser from '@/components/common/addUserForm/AddUserForm';
import EditUser from '@/components/common/editUser/EditUser';
import Pagination from '@/components/common/pagination/Pagination';
import SearchByCategories from '@/components/common/searchByCategories/SearchByCategories';
import NavRoute from '@/components/pages/user/share/navRoute/NavRoute';
import ContainerWrapper from '@/components/pages/user/share/containerWrapper/ContainerWrapper';
import { postData } from '@/components/utils/UserApi';
import { useTranslation } from 'next-i18next';

const END_POINT = '/user/getlist';
const COUNT = 10;

const CompanyUsers = ({ backRoute }) => {
    const { t } = useTranslation("user_board");
    const categories = {
        "First name": 'first_name',
        "Last name": 'last_name',
        "Email": 'email',
        "Role": 'is_admin',
        "Update date": 'modified_time',
    };
    const searchParams = useSearchParams();
    const companyId = searchParams.get('company_id');


    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [sortConfig, setSortConfig] = useState({ key: 'first_name', direction: 'ascending' });
    const [isSearching, setIsSearching] = useState(false);
    const [searchQuery, setSearchQuery] = useState({
        key: '',
        value: ''
    });


    // Fetch users
    const fetchCompanies = useCallback(async (page, query = '') => {
        setLoading(true);
        try {
            const data = await postData(END_POINT, {
                page,
                count: COUNT,
                sort: [{ by: "name", type: "asc" }],
                search: query ? [{ by: query.key, value: query.value }] : [],
                company_id: companyId
            });

            setUsers(data.Data.List);
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
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    // Search logic
    const handleSearch = useCallback(() => {
        setIsSearching(true);
        fetchCompanies(1, searchQuery);  // Call API with search query
        setCurrentPage(1);  // Reset to the first page
    }, [searchQuery, fetchCompanies]);

    const handleClearSearch = useCallback(() => {
        setSearchQuery('');  // Clear search query
        setIsSearching(false);
        fetchCompanies(1);  // Fetch all companies again
        setSearchQuery({ key: '', value: '' });
    }, [fetchCompanies]);

    // Merge first name, middle name and last name
    const getFullName = (first_name, middle_name, last_name) => {
        return middle_name ? `${first_name} ${middle_name} ${last_name}` : `${first_name} ${last_name}`;
    };

    // Get role label
    const getRoleLabel = (is_admin) => {
        return is_admin ? t('user_table.admin') : t('user_table.normal_user');
    };

    // Sorting logic
    const sortedUsers = [...users].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
    });

    const requestSort = (key) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'ascending' ? 'descending' : 'ascending'
        }));
    };

    // Add user logic
    const toggleModal = () => setIsOpen(prev => !prev);

    const handleEditUserClick = (user) => {
        setCurrentUser(user);
        setIsEditing(true);
    };

    return (
        <ContainerWrapper>
            <div className="bg-white shadow-md sm:rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <NavRoute backRoute={backRoute} origin="CÔNG TY" target="Người dùng" />
                    <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <button type="button" onClick={toggleModal} className="flex items-center justify-center text-black bg-lime-300 hover:bg-lime-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2">
                            <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                            </svg>
                            {t('user_table.add_user')}
                        </button>
                    </div>
                </div>
                <div className="pb-4 pl-4">
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

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-sm text-gray-700 uppercase bg-gradient-to-r from-lime-200 to-lime-100">
                            <tr>
                                <th scope="col" className="px-4 py-3">
                                    <button type="button" onClick={() => requestSort('first_name')}>
                                        {t('user_table.user_name')} {sortConfig.key === 'first_name' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3 w-[180px]">
                                    <button type="button" onClick={() => requestSort('is_admin')}>
                                        {t('user_table.role')} {sortConfig.key === 'is_admin' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3">
                                    <button type="button" onClick={() => requestSort('email')}>
                                        EMAIL {sortConfig.key === 'email' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3 w-[180px]">
                                    <button type="button" onClick={() => requestSort('modified_time')}>
                                        {t('user_table.update_day')} {sortConfig.key === 'modified_time' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3 w-[150px]">
                                    <button type="button" onClick={() => requestSort('status')}>
                                        {t('user_table.status')} {sortConfig.key === 'status' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                    </button>
                                </th>
                                <th scope="col" className="px-4 py-3 w-[150px]">
                                    {t('user_table.action')}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedUsers.map((user, index) => (
                                <tr key={index} className="border-b hover:bg-slate-50">
                                    <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                                        {getFullName(user.first_name, user.middle_name, user.last_name)}
                                    </th>
                                    <td className="px-4 py-3">
                                        {getRoleLabel(user.is_admin) === t('user_table.admin') && (
                                            <div className="bg-blue-100 text-blue-800 px-1 rounded flex items-center">
                                                <FaUserTie className="mr-2" />{t('user_table.admin')}
                                            </div>
                                        )}
                                        {getRoleLabel(user.is_admin) === t('user_table.normal_user') && (
                                            <div className="bg-violet-200 text-violet-800 px-1 rounded flex items-center">
                                                <FaUserEdit className="mr-2" />{t('user_table.normal_user')}
                                            </div>
                                        )}
                                        {getRoleLabel(user.is_admin) === 'Người xem' && (
                                            <div className="bg-gray-200 text-black px-1 rounded flex items-center">
                                                <FaUser className="mr-2" />Người xem
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-4 py-3">{user.email}</td>
                                    <td className="px-4 py-3">
                                        {user.modified_time ? new Date(user.modified_time).toLocaleDateString() : t('user_table.not_yet_update')}
                                    </td>
                                    <td className="flex px-4 py-3 items-center">
                                        <div className={`h-3 w-3 rounded-md ${user.status ? 'bg-red-500' : 'bg-green-500'}`}></div>
                                        <div className={`pl-4 ${user.status ? 'text-red-500' : 'text-green-500'}`}>{`${user.status ? 'Disable' : 'Active'}`}</div>
                                    </td>
                                    <td className="py-2 px-4 border-b relative">
                                        <ActionButton rowIndex={index} totalRows={users.length} onEdit={() => handleEditUserClick(user)} />
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
            {isEditing && <EditUser user={currentUser} onClose={() => setIsEditing(false)} />}
            <AddUser isOpen={isOpen} onClose={toggleModal} onAddUser={(newUser) => setUsers(prev => [...prev, newUser])} />
        </ContainerWrapper>
    );
};

export default CompanyUsers;
