import React from 'react';

const StyledForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6">Label Styling</h2>
      <form>
        <div className="mb-4 text-left">
          <label htmlFor="name" className="block text-red-600 font-bold mb-2">NAME</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Enter your name" />
        </div>
        <div className="mb-4 text-left">
          <label htmlFor="email" className="block text-red-600 font-bold mb-2">EMAIL</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded" placeholder="Enter your email" />
        </div>
        <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-200">SUBMIT</button>
      </form>
    </div>
  );
};

export default StyledForm;