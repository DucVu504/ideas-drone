"use client"
import React, { useState } from 'react';
import { PencilAltIcon, TrashIcon, ArchiveIcon, PlusCircleIcon} from "@heroicons/react/outline";

const RoleList = () => {
    const [roles, setRoles] = useState(['Executive', 'Engineer', 'Maintainer', 'Guest', 'Design Planner']);
    const [selectedRole, setSelectedRole] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [newRole, setNewRole] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editRoles, setEditRoles] = useState(roles);

    const handleClick = (role) => {
        setSelectedRole(role);
    };

    const handleAddRole = () => {
        setShowInput(true);
    };

    const handleSaveRole = () => {
        if (newRole.trim() !== '') {
            setRoles([...roles, newRole]);
            setNewRole('');
            setShowInput(false);
        }
    };

    const handleCancel = () => {
        setNewRole('');
        setShowInput(false);
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        setEditRoles(roles);  // Reset edit roles to current roles
    };

    const handleRoleChange = (index, newValue) => {
        const updatedRoles = [...editRoles];
        updatedRoles[index] = newValue;
        setEditRoles(updatedRoles);
    };

    const handleSaveEdits = () => {
        setRoles(editRoles);
        setIsEditing(false);
    };

    const handleDeleteRole = (index) => {
        const updatedRoles = roles.filter((_, i) => i !== index);
        setRoles(updatedRoles);
        setEditRoles(updatedRoles);
    };

    return (
        <div className="bg-gray-200 p-4 w-1/5 rounded-xl laptop:h-[550px] desktop:h-[750px] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold">ROLE LIST</h2>
                <button onClick={isEditing ? handleSaveEdits : handleEditToggle}>
                    {isEditing ? (
                        <ArchiveIcon className="w-5 h-5 text-blue-500" />
                    ) : (
                        <PencilAltIcon className="w-5 h-5 text-gray-500" />
                    )}
                </button>
            </div>
            <ul>
                {roles.map((role, index) => (
                    <li key={index} className="rounded-md border flex items-center justify-center text-sm">
                        {isEditing ? (
                            <>
                                <input
                                    className="mb-2 w-full p-2 rounded-md cursor-pointer border flex justify-between hover:border-lime-300"
                                    value={editRoles[index]}
                                    onChange={(e) => handleRoleChange(index, e.target.value)}
                                />
                                <button onClick={() => handleDeleteRole(index)} className="pl-1 text-red-500">
                                <TrashIcon className="w-5 h-5" />
                                </button>
                            </>
                        ) : (
                            <div
                                className={`mb-2 w-full p-2 rounded-md cursor-pointer border flex justify-between hover:border-lime-300 ${selectedRole === role ? 'bg-lime-300' : 'bg-white'}`}
                                onClick={() => handleClick(role)}
                            >
                                {role}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            {showInput && (
                <div className="flex items-center space-x-2 mb-2">
                    <input
                        type="text"
                        className="w-full p-2 rounded-md border text-sm"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        placeholder="Enter role name"
                    />
                    <button
                        className="text-red-500 font-bold border-red-500 border rounded-md p-1"
                        onClick={handleCancel}
                    >
                        X
                    </button>
                </div>
            )}
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button
                    type="button"
                    className="w-full flex items-center justify-center text-sm text-gray-800 border border-green-500 hover:bg-green-500 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg px-4 py-2"
                    onClick={showInput ? handleSaveRole : handleAddRole}
                >
                    <PlusCircleIcon className="w-5 h-5 mx-1" />
                    {showInput ? 'LƯU VAI TRÒ' : 'THÊM VAI TRÒ'}
                </button>
            </div>
        </div>
    );
};
export default RoleList;
