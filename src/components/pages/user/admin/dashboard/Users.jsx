"use client"
import { useState, useEffect} from 'react';
import { FaUserTie, FaUserEdit, FaUser } from 'react-icons/fa';
import ActionButton from '@/components/common/actionButton/ActionButton';
import AddUser from '@/components/common/addUserForm/AddUserForm';
import EditUser from '@/components/common/editUser/EditUser';
import Pagination from '@/components/common/pagination/Pagination';
import { postData } from '@/components/utils/UserApi';
import { useTranslation } from 'next-i18next';

const END_POINT = '/user/getlist'
const COUNT = 10;

const Users = () => {
    
    const { t } = useTranslation("user_board");
    // Get users
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const requestBody = (page, is_admin = "false") => ({
        "page": page,
        "count": COUNT,
        "sort": [
            {
                "by": "first_name",
                "type": "asc"
            }
        ],
        "search": [
            {
                "by": "is_admin",
                "value": is_admin
            },
            {
                "by": "first_name",
                "value": ""
            }
        ]
    });

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

    const fetchUsers = async (page) => {
        const user_data = await postData(END_POINT, requestBody(page , "false"));
        const admin_data = await postData(END_POINT, requestBody(page, "true"));

        setUsers(user_data.Data.List.concat(admin_data.Data.List));
        setTotalPages(Math.ceil((user_data.Data.Total +user_data.Data.Total) / COUNT));
        setLoading(false);
        };
    
    // Fetch users when the component mounts
    useEffect(() => {
            fetchUsers(currentPage);
    }, [currentPage]);

    // Join user name
    function getFullName(first_name, middle_name, last_name) {
        if (middle_name) {
            return `${first_name} ${middle_name} ${last_name}`;
        }
        return `${first_name} ${last_name}`;
    }

    // Handle set role
    // Todo: need to improve !!
    function setRole(is_admin) {
        if (is_admin) {
            return t('user_table.admin');
        }
        return t('user_table.normal_user');
    }

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
      };

    // Handle sort
    const [sortConfig, setSortConfig] = useState({ key: 'first_name', direction: 'ascending' });
    const totalRows = users.length;
    
    const sortedUsers = [...users].sort((a, b) => {
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


    // Control Add User Modal
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    // Control Edit User Modal
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
                <div className="flex flex-col md:flex-row items-right justify-end space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <button type="button" onClick={toggleModal} className="flex items-center justify-center text-black bg-lime-300 hover:bg-lime-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2">
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                {t('user_table.add_user')}
                            </button>

                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-sm text-gray-700 uppercase bg-gradient-to-r from-lime-200 to-lime-100 ">
                                <tr>
                                    <th scope="col" className="px-4 py-3 ">
                                        <button type="button" onClick={() => requestSort('first_name')}>
                                        {t('user_table.user_name')}{sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[180px]">
                                        <button type="button" onClick={() => requestSort('is_admin')}>
                                        {t('user_table.role')} {sortConfig.key === 'role' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
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
                                        {t('user_table.status')}  {sortConfig.key === 'status' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[150px]">
                                        <button type="button">
                                        {t('user_table.action')}
                                        </button>
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
                                            {setRole(user.is_admin) === t('user_table.admin') && (
                                            <div className="bg-blue-100 text-blue-800 px-1 rounded flex items-center">
                                                <FaUserTie className="mr-2" />{t('user_table.admin')}
                                            </div>
                                            )}
                                            {setRole(user.is_admin) === t('user_table.normal_user') && (
                                            <div className="bg-violet-200 text-violet-800 px-1 rounded flex items-center">
                                                <FaUserEdit className="mr-2" />{t('user_table.normal_user')}
                                            </div>
                                            )}
                                            {setRole(user.is_admin)=== 'Người xem' && (
                                            <div className="bg-gray-200 text-black px-1 rounded flex items-center">
                                                <FaUser className="mr-2" />Người xem
                                            </div>
                                            )}
                                        </td>
                                        <td className="px-4 py-3">{user.email}</td>
                                        <td className="px-4 py-3">
                                            {user.modified_time ? new Date(user.modified_time).toLocaleDateString() : t('user_table.not_yet_update')}
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className={`h-4 w-4 rounded-md ${user.status ? 'bg-red-500' : 'bg-green-500'}`}></div>
                                        </td>
                                        <td className="py-2 px-4 border-b relative">
                                            <ActionButton rowIndex={index} totalRows={totalRows} onEdit={() => handleEditUserClick(user)}/>
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
            </div>
            {isEditing && <EditUser user={currentUser} onClose={() => setIsEditing(false)} />}
            <AddUser isOpen={isOpen} onClose={toggleModal} onAddUser={addUser}/>
        </section>
    );
};

export default Users;
