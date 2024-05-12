
import Hero from "../components/hero/Hero";
import ShortInfo from "../components/short_intro/ShortIntro";
import Project from "../components/projects/Projects";
import Service from "../components/service_info/Service";
import Equipment from "../components/equipment/Equipment";
import Contact from "../components/contact/Contact";


const OPTIONS = { align: 'start' }
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <div>
      <Hero/>
      <ShortInfo/>
      <Project slides={SLIDES} options={OPTIONS}/>
      <Service/>
      <Equipment/>
      <Contact/>
    </div>
  );
}