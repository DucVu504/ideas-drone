
import React from 'react';
import { useTranslation } from 'next-i18next';

const Quotes = () => {
  const { t } = useTranslation("public");
  return (
    <div>
    <div className="flex flex-col xl:flex-row items-center justify-center p-6 xl:p-32 xl:mx-16 space-y-10   bg-white text-gray-800">
      <div className="xl:w-1/2 mb-6 md:mb-0">
        <h1 className="text-3xl font-bold mb-4">Giải pháp toàn diện. <br /> <span className="text-red-500">Dịch vụ Drone.</span></h1>
        <p className="mb-4">
          IdeasDrone delivers 3D models in a secure, cloud-based environment with powerful tools to report, monitor and take action on the condition of built assets – faster, safer, better.
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
      </div>
      <div className="xl:w-1/2 bg-gray-100 p-6 lg:mx-20 xl:mx-28 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">{t('quotes.title')}</h2>
        <form className="space-y-4">
          <div className="grid md:space-x-4 md:space-y-0 space-y-4 md:grid-cols-2">
            <input type="text" placeholder={t('quotes.firstname')} className="p-2 border border-gray-300 rounded" />
            <input type="text" placeholder={t('quotes.lastname')} className="p-2 border border-gray-300 rounded" />
          </div>
          <input type="email" placeholder={t('quotes.mail')} className="w-full p-2 border border-gray-300 rounded" />
          <textarea placeholder={t('quotes.mes')} className="w-full p-2 border border-gray-300 rounded"></textarea>
          <div className=" items-center space-y-2">
            <p className = "text-xs font-thin py-2">{t('quotes.term')}</p>
            <input type="checkbox" id="privacyPolicy" />
            <label htmlFor="privacyPolicy" className="text-sm font-light px-2">{t('quotes.checkbox1')}<span className="text-red-500">{t('quotes.checkbox2')}</span></label>
          </div>
          <button type="submit" className="w-full p-2 bg-red-500 text-white font-bold rounded">{t('quotes.book')}</button>
        </form>
      </div>
    </div>
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Lưu trữ dữ liệu của bạn trên nền tảng của chúng tôi</h2>
        <p className="mt-2 text-gray-600">
          IdeasDrone cung cấp dịch vụ lưu trữ dữ liệu  <span className="text-red-500">thông tin địa lý</span>, trên nền tảng đám mây.
        </p>
      </div>
      <div className="flex justify-center space-x-8">
        <div className="text-center">
          <img
            className="w-16 h-16 mx-auto"
            src="./icons/homepage/check.svg"
            alt="An toàn"
          />
          <p className="mt-4 text-gray-500  font-semibold">An toàn</p>

        </div>
        <div className="text-center">
          <img
            className="w-16 h-16 mx-auto"
            src="./icons/homepage/check.svg"
            alt="Tiện dụng"
          />
          <p className="mt-4 text-gray-500 font-semibold">Tiện dụng</p>

        </div>
        <div className="text-center">
          <img
            className="w-16 h-16 mx-auto"
            src="./icons/homepage/check.svg"
            alt="Truy cập mọi nơi"
          />
          <p className="mt-4 text-gray-500  font-semibold">Truy cập mọi nơi</p>

        </div>
        <div className="text-center">
          <img
            className="w-16 h-16 mx-auto"
            src="./icons/homepage/check.svg"
            alt="Dễ dàng quản lý"
          />
          <p className="mt-4 text-gray-500  font-semibold">Dễ dàng quản lý</p>

        </div>
      </div>

    </div>
    </div>
  );
};

export default Quotes;
