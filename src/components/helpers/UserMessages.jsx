"use client"
import { useRouter } from 'next/navigation';
import enCommon from '../locales/en/common.json';
import enHomepage from '../locales/en/homepage.json';
import viCommon from '../locales/vi/common.json';
import viHomepage from '../locales/vi/homepage.json';

const messages = {
  en: { ...enCommon, ...enHomepage },
  vi: { ...viCommon, ...viHomepage },
};

const useMessages = (namespace) => {
  const { locale } = useRouter();
  return (id) => messages[locale][`${namespace}.${id}`];
};

export default useMessages;
