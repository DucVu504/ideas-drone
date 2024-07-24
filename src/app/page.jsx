
"use client"
import Hero from "../components/pages/home/hero/Hero";
import ShortInfo from "../components/pages/home/intro/Intro";
import Project from "../components/pages/home/projects/Projects";
import Service from "../components/pages/home/services/Services";
import Equipment from "../components/pages/home/equipments/Equipments";
import Contact from "../components/pages/home/contact/Contact";
import SocialMediaIcons from "../components/common/socialMedia/SocialMedia";
import HomeLayout from "../components/layout/homeLayout/HomeLayout";
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t, i18n } = useTranslation('translate');

  // Debugging: Log current language and translation keys
  console.log("Current language:", i18n.language);
  console.log("Translation for 'hello':", t('hello'));
  return (
    <div>
      <HomeLayout>
        <h1>{t('hello')}</h1>
        <Hero/>
        <ShortInfo/>
        <Project />
        <Service/>
        <Equipment/>
        <Contact/>
        <SocialMediaIcons/>
      </HomeLayout>
    </div>
  );
}