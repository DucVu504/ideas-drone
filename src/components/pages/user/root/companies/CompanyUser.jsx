"use client"
import { useState, useEffect} from 'react';
import { useSearchParams } from 'next/navigation';
import { FaUserTie, FaUserEdit, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import ActionButton from '@/components/common/actionButton/ActionButton';
import AddUser from '@/components/common/addUserForm/AddUserForm';
import EditUser from '@/components/common/editUser/EditUser';


const fetchUsers = async (company_id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3002/company/get-all-users/${company_id}`,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'

      }
    });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      return data['Data'];
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return []; // Return an empty array in case of error
    }
  };

const CompanyUsers = () => {
    
    // Get users
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    // const company_id = 'cea48531-5ce0-46dc-afd6-f5ffce7a1520';

    const searchParams = useSearchParams()
    const companyId = searchParams.get('companyId')

    // Fetch users when the component mounts
    useEffect(() => {
      const getUsers = async () => {
          const data = await fetchUsers(companyId);
          setUsers(data);
          setLoading(false);
        };
        
        getUsers();
    }, []);

    // Join user name
    function getFullName(firstName, middleName, lastName) {
        if (middleName) {
            return `${firstName} ${middleName} ${lastName}`;
        }
        return `${firstName} ${lastName}`;
    }

    // Handle set role
    // Todo: need to improve !!
    function setRole(is_admin) {
        if (is_admin) {
            return 'Quản trị viên';
        }
        return 'Người chỉnh sửa';
    }

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
      };

    
    const [sortConfig, setSortConfig] = useState({ key: 'productName', direction: 'ascending' });
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

    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
  
    const handleEditUserClick = (user) => {
      setCurrentUser(user);
      setIsEditing(true);
    };

    return (
        <section className="bg-gray-50  p-3 sm:p-5 lg:ml-36">
            <div className="mx-auto max-w-screen-xl px-4 lg:mt-16">
                <div className="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="flex items-center p-2 space-x-2 text-sm text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm sm:text-base  sm:space-x-4 ">
                            <Link href="/root/companies">
                                <li className="flex items-center hover:text-blue-600 group">
                                    CÔNG TY IDEASDRONE
                                    <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-0 group-hover:rotate-180 transition-transform" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                                    </svg>
                                </li>
                            </Link>
                            <li className="flex items-center">
                                Người dùng
                            </li>
                        </div>
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <button type="button" onClick={toggleModal} className="flex items-center justify-center text-black bg-lime-300 hover:bg-lime-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2">
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                THÊM NGƯỜI DÙNG
                            </button>

                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-sm text-gray-700 uppercase bg-gradient-to-r from-lime-200 to-lime-100 ">
                                <tr>
                                    <th scope="col" className="px-4 py-3 ">
                                        <button type="button" onClick={() => requestSort('name')}>
                                            TÊN NGƯỜI DÙNG{sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[180px]">
                                        <button type="button" onClick={() => requestSort('role')}>
                                            VAI TRÒ {sortConfig.key === 'role' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        <button type="button" onClick={() => requestSort('email')}>
                                            EMAIL {sortConfig.key === 'email' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[180px]">
                                        <button type="button" onClick={() => requestSort('modified_time')}>
                                            NGÀY CẬP NHẬT {sortConfig.key === 'modified_time' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[150px]">
                                        <button type="button" onClick={() => requestSort('status')}>
                                            TRẠNG THÁI {sortConfig.key === 'status' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>
                                    <th scope="col" className="px-4 py-3 w-[150px]">
                                        <button type="button" onClick={() => requestSort('status')}>
                                            HÀNH ĐỘNG {sortConfig.key === 'status' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                                        </button>
                                    </th>


                                </tr>
                            </thead>
                            <tbody>
                                {sortedUsers.map((user, index) => (
                                    <tr key={index} className="border-b hover:bg-slate-50">
                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                                            {getFullName(user.FirstName, user.MiddleName, user.LastName)}
                                        </th>
                                        <td className="px-4 py-3">
                                            {setRole(user.IsAdmin) === 'Quản trị viên' && (
                                            <div className="bg-blue-100 text-blue-800 px-1 rounded flex items-center">
                                                <FaUserTie className="mr-2" />Quản trị viên
                                            </div>
                                            )}
                                            {setRole(user.IsAdmin) === 'Người chỉnh sửa' && (
                                            <div className="bg-violet-200 text-violet-800 px-1 rounded flex items-center">
                                                <FaUserEdit className="mr-2" />Người chỉnh sửa
                                            </div>
                                            )}
                                            {setRole(user.IsAdmin)=== 'Người xem' && (
                                            <div className="bg-gray-200 text-black px-1 rounded flex items-center">
                                                <FaUser className="mr-2" />Người xem
                                            </div>
                                            )}
                                        </td>
                                        <td className="px-4 py-3">{user.Email}</td>
                                        <td className="px-4 py-3">{user.ModifiedTime}</td>
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
            </div>
            {isEditing && <EditUser user={currentUser} onClose={() => setIsEditing(false)} />}
            <AddUser isOpen={isOpen} onClose={toggleModal} onAddUser={addUser}/>
        </section>
    );
};

export default CompanyUsers;
