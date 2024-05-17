
import Hero from "../components/hero/Hero";
import ShortInfo from "../components/short_intro/ShortIntro";
import Project from "../components/projects/Projects";
import Service from "../components/service_info/Service";
import Equipment from "../components/equipment/Equipment";
import Contact from "../components/contact/Contact";
import SocialMediaIcons from "../components/quickcontact/SocialMediaIcons";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ShortInfo/>
      <Project />
      <Service/>
      <Equipment/>
      <Contact/>
      <SocialMediaIcons/>
    </div>
  );
}