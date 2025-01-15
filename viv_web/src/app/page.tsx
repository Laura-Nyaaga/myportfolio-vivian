import Navbar from "./Navbar/navbar";
import About from "./About/about";
import AboutMe from "./AboutMe/aboutme";
import Skills from "./Skills/skills";
import Projects from "./Projects/projects";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

