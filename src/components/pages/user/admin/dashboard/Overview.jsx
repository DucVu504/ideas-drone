import React from 'react';
import Image from 'next/image';

const stats = [
  {
    id: 2,
    icon: "/icons/common/projects.svg",
    label: 'Số dự án',
    value: '1002',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-500'
  },
  {
    id: 3,
    icon: "/icons/common/users.svg",
    label: 'Số người dùng',
    value: '376',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-500'
  },
  {
    id: 4,
    icon: "/icons/common/pending_contact.svg",
    label: 'Projects Storage',
    value: '35 Gb',
    bgColor: 'bg-cyan-100',
    iconColor: 'text-cyan-500'
  },
];

export default function StatsCards() {
  return (
    <div className="flex pb-6 space-x-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center w-full p-4 bg-white rounded-lg shadow-md"
        >
          <div
            className={`p-3 rounded-full ${stat.bgColor}`}
          >
            <span className={`text-2xl ${stat.iconColor}`}>
            <Image
                src={stat.icon}             
                alt="Icon"                
                width={32}                
                height={32}                 
                className={stat.iconColor}  
                />
            </span>
          </div>
          <div className="ml-4">
            <p className="flex justify-center text-sm text-gray-500">{stat.label}</p>
            <p className="flex justify-center text-2xl font-semibold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
