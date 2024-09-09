"use client";
import { useState, useCallback } from "react";

const SearchByCategories = ({ categories, onSearch, searchQuery, setSearchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    key: Object.keys(categories)[0],
    value: Object.values(categories)[0],
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory({
      key: category,
      value: categories[category],
    });
    setDropdownOpen(false);
  }, [categories]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSearch();
  }, [onSearch]);

  const handleInputChange = (e) => {
    setSearchQuery({
      key: selectedCategory.value,
      value: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <div className="flex">
        {/* Dropdown Button */}
        <button
          type="button"
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-100"
        >
          {selectedCategory.key}
          <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="z-10 bg-white mt-12 divide-y divide-gray-100 rounded-lg shadow w-auto absolute border border-gray-300">
            <ul className="py-2 text-sm text-gray-700">
              {Object.keys(categories)
                .filter((category) => category !== selectedCategory.key)
                .map((category) => (
                  <li key={category}>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        )}

        {/* Search Input */}
        <div className="relative w-full">
          <input
            type="search"
            onChange={handleInputChange}
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-4 border border-gray-300 focus:ring-lime-500 focus:border-lime-500"
            placeholder={`Search by ${selectedCategory.key}`}
            value={searchQuery.value || ''}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-lime-400 rounded-e-lg border border-lime-500 hover:bg-lime-600 focus:ring-2 focus:outline-none focus:ring-lime-400"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchByCategories;
