
import Hero from "../components/homepage/hero/Hero";
import ShortInfo from "../components/homepage/short_intro/ShortIntro";
import Project from "../components/homepage/projects/Projects";
import Service from "../components/homepage/service_info/Service";
import Equipment from "../components/homepage/equipment/Equipment";
import Contact from "../components/homepage/contact/Contact";
import SocialMediaIcons from "../components/shared/quickcontact/SocialMediaIcons";
import Navbar from "../components/homepage/navbar/Navbar";
import Footer from "../components/homepage/footer/Footer";
// import { useTranslation } from 'next-i18next';

export default function Home() {
  // const { t } = useTranslation('common');
  return (
    <div>
      {/* <h1>{t('welcome')}</h1> */}
      <Navbar/>
      <Hero/>
      <ShortInfo/>
      <Project />
      <Service/>
      <Equipment/>
      <Contact/>
      <SocialMediaIcons/>
      <Footer/>
    </div>
  );
}