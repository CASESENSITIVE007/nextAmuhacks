
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About";
import HacksTimeline  from "./components/HacksTimeline";
import Prize from "./components/Prize";
import Themes from './components/Themes';
import Team from "./components/Team";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div className="dark bg-black" >
    <Navbar />
    <Hero/>
    <About/>
    <HacksTimeline/>
    <Prize/>
    <Themes/>
    <Team/>
    <Faq/>
    <Footer/>
   </div>
  );
}
