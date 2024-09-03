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

const GeneralInfo = () => {
    
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
        <div>
            <div className="mx-auto max-w-screen-xl">
                <div className="bg-white  p-1 shadow-md sm:rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-sm text-gray-700 uppercase bg-gradient-to-r from-lime-200 to-lime-100 ">
                                <tr>
                                    <th scope="col" className="px-4 py-3 w-2/4 ">
                                        <button type="button" onClick={() => requestSort('first_name')}>
                                        TÊN DỰ ÁN{sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-1/4">
                                        <button type="button" onClick={() => requestSort('is_admin')}>
                                        ĐỊA ĐIỂM {sortConfig.key === 'role' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-1/4">
                                        <button type="button" onClick={() => requestSort('email')}>
                                            THÀNH VIÊN{sortConfig.key === 'email' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
  
                                </tr>
                            </thead>
                            <tbody>
                                {sortedUsers.map((user, index) => (
                                    <tr key={index} className="border-b hover:bg-slate-50">
                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                                            TEST
                                        </th>
                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                                            TEST
                                        </th>
                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                                            TEST
                                        </th>
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
        </div>
    );
};

export default GeneralInfo;
