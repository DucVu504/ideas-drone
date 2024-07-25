"use client"
import React, { useState } from 'react';
import Image from "next/legacy/image";
import { useTranslation } from 'react-i18next';

const LocaleSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'vi');

  const handleLanguageChange = () => {
    setIsEnglish(!isEnglish);
    i18n.changeLanguage(isEnglish ? 'en' : 'vi');
  };

  return (
    <button className="relative flex items-center justify-center w-14 h-6 rounded-full border bg-gray-100 border-gray-400 hover:bg-gray-100" onClick={handleLanguageChange}>
      <div className={`absolute rounded-full w-6 h-6 ${isEnglish ? 'left-0' : 'right-0'} transition-all duration-300`}>
        <Image
          src={isEnglish ? '/images/common/vietnam_flag.png' : '/images/common/uk_flag.png'}
          alt={t(isEnglish ? 'english' : 'vietnamese')} // Use translated alt text
          layout="fill" 
          className="mx-auto"
        />
      </div>
      <span className="absolute  font-semibold" style={{ bot: '1px', right: isEnglish ? '9px' : 'auto', left: isEnglish ? 'auto' : '6px' }}>
        {isEnglish ? 'VI' : 'EN'}
      </span>
    </button>
  );
};

export default LocaleSwitcher;
