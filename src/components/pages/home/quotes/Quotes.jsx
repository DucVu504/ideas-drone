// components/ConsultationForm.js
import React from 'react';

const Quotes = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-32 md:mx-16  bg-white text-gray-800">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-3xl font-bold mb-4">The software didn’t exist. <br /> <span className="text-red-500">So we built it.</span></h1>
        <p className="mb-4">
          Trendspek delivers 3D models in a secure, cloud-based environment with powerful tools to report, monitor and take action on the condition of built assets – faster, safer, better.
        </p>
        <ul className="list-none space-y-2">
          <li className="flex items-center">
            <span className="text-red-500 mr-2">✔</span> Precision Reality Twin models with millimetre detail
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">✔</span> Safe, repeatable condition auditing
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">✔</span> Interactive record-keeping and reporting
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">✔</span> Accurate CAPEX forecasting
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">✔</span> Proactive maintenance planning
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap">
          <img src="/path/to/logo1.png" alt="Company logo" className="w-20 h-20 mr-4 mb-4" />
          <img src="/path/to/logo2.png" alt="Company logo" className="w-20 h-20 mr-4 mb-4" />
          {/* Add more logos as needed */}
        </div>
      </div>
      <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Book a consultation with us</h2>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input type="text" placeholder="First name*" className="flex-1 p-2 border border-gray-300 rounded" />
            <input type="text" placeholder="Last name*" className="flex-1 p-2 border border-gray-300 rounded" />
          </div>
          <input type="email" placeholder="Company email*" className="w-full p-2 border border-gray-300 rounded" />
          <textarea placeholder="Let us know how we can help.*" className="w-full p-2 border border-gray-300 rounded"></textarea>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="privacyPolicy" />
            <label htmlFor="privacyPolicy" className="text-sm">I agree to Trendspek’s <a href="#" className="text-red-500">Privacy Policy*</a></label>
          </div>
          <button type="submit" className="w-full p-2 bg-red-500 text-white font-bold rounded">Book now</button>
        </form>
      </div>
    </div>
  );
};

export default Quotes;
