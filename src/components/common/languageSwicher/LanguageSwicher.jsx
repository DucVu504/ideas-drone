"use client"
import { useRouter } from 'next/navigation';
import { FaFlagUsa, FaFlagVn } from 'react-icons/fa'; 

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = router;

  const handleLanguageChange = (newLocale) => {
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`flex items-center justify-center p-2 rounded cursor-pointer ${locale === 'en' ? 'border-b-2 border-black' : ''}`}
      >
        <FaFlagUsa className="text-xl" />
        <span className="sr-only">English</span>
      </button>
      <button
        onClick={() => handleLanguageChange('vi')}
        className={`flex items-center justify-center p-2 rounded cursor-pointer ${locale === 'vi' ? 'border-b-2 border-black' : ''}`}
      >
        <FaFlagVn className="text-xl" />
        <span className="sr-only">Tiếng Việt</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
