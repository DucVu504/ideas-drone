"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from 'next/navigation';
import Pagination from '@/components/common/pagination/Pagination';
import slugify from '@/components/utils/Slugify';
import { postData } from '@/components/utils/UserApi';

const END_POINT = '/company/get-all';
const COUNT = 15;

const imageSources = [
  "/images/common/company_1.png",
  "/images/common/company_2.png",
  "/images/common/company_3.png",
  "/images/common/company_4.png",
  "/images/common/company_5.png"
];

// Card component
const CompanyCard = ({ company, imageSrc, onClick }) => (
  <div
    className="relative border rounded-lg overflow-hidden flex flex-col justify-center items-center shadow-sm bg-yellow-50 group"
    onClick={onClick}
  >
    <div className="relative w-full flex justify-center items-center">
      <img
        src={imageSrc}
        alt={company.name}
        className="w-24 h-24 object-cover p-4"
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


// Main component
const CompaniesHandler = () => {
  const router = useRouter();

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCompanies = async (page) => {
    try {
      const data = await postData(END_POINT, requestBody(page));
      setCompanies(data.Data.List);
      setTotalPages(Math.ceil(data.Data.Total / COUNT));
    } catch (error) {
      console.error("Failed to fetch companies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies(currentPage);
  }, [currentPage]);

  const requestBody = (page) => ({
    page,
    count: COUNT,
    sort: [{ by: "name", type: "asc" }],
    search: [{ by: "city", value: "" }]
  });

  const handleCompanyClick = useCallback((path, company_id) => {
    router.push(`${path}?company_id=${company_id}`);
}, [router]);

  return (
    <section className="bg-gray-50 z-0 p-3 sm:p-5 lg:ml-36">
      <div className="mx-auto max-w-screen-xl px-4 lg:mt-16">
      <form className="max-w-md pl-4">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for company..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      <div className="p-6">
        <h2 className="text-2xl text-gray-700 font-bold">Danh sách công ty</h2>
        <p className="my-2 text-sm text-gray-500">Chọn một công ty để xem chi tiết quyền và vai trò</p>
      </div>

      <div className="grid grid-cols-5 gap-6 p-4">
        {companies.map((company, index) => (
          <CompanyCard
            key={company.id}
            company={company}
            imageSrc={imageSources[index % imageSources.length]}
            onClick={() => handleCompanyClick(`/root/projects/${slugify(company.name)}`, company.id)}>

            </CompanyCard>
          
        ))}
      </div>
      <div className="px-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          handlePrevious={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          handleNext={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
        />
      </div>
      </div>
      </section>
  );
};

export default CompaniesHandler;
