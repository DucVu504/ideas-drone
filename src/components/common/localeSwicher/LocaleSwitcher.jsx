"use client"
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const LocaleSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    const currentPath = router.asPath;
    const newPath = `/${lang}${currentPath}`;
    
    router.push(newPath);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('vi')}>Tiếng Việt</button>
    </div>
  );
};

export default LocaleSwitcher;