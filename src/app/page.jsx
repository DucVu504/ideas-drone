
import Hero from "../components/hero/Hero";
import ShortInfo from "../components/short_intro/ShortIntro";
import Project from "../components/projects/Projects";
import Service from "../components/service_info/Service";
import Equipment from "../components/equipment/Equipment";
import Contact from "../components/contact/Contact";
import SocialMediaIcons from "../components/quickcontact/SocialMediaIcons";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
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