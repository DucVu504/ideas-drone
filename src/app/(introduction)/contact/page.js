"use client"
import { useTranslation } from 'react-i18next';
import LocaleSwitcher from "@/components/common/localeSwitcher/LocaleSwitcher";

const HomePage = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('english')}</h1>
      <LocaleSwitcher />
    </div>
  );
};

export default HomePage;
