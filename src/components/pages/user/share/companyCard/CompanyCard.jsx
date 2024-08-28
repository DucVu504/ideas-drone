import React from "react";

// Card component
const CompanyCard = ({ company, onClick }) => (
    <div
      className="relative border rounded-lg overflow-hidden flex flex-col justify-center items-center shadow-sm bg-yellow-50 group"
      onClick={onClick}
    >
      <div className="relative w-full flex justify-center items-center">
        <img
          src="/images/common/company.png"
          alt={company.name}
          className="w-28 h-28 object-cover p-2"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg bg-opacity-100">VIEW</span>
        </div>
      </div>
      <div className="p-2 w-full bg-white ">
        <div className="text-gray-800 text-sm text-left">
          {company.name}
        </div>
        <div className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Last modified: {new Date(company.modified_time).toLocaleDateString()}
        </div>
      </div>
    </div>
  );

  export default CompanyCard;