import Navbar from "../components/UI/Navbar.tsx";
import { Hero } from "../components/Hero.tsx";
import { About } from "../components/About.tsx";
import { Technologies } from "../components/Technologies.tsx";
import { Experience } from "../components/Experience.tsx";
import { Projects } from "../components/Projects.tsx";
import { Contact } from "../components/Contact.tsx";
import { Formation } from "../components/Formation.tsx";

export const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div className={"container mx-auto px-4 sm:px-6 lg:px-10 pt-20"}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Formation />
        <Technologies />
        <Contact />
      </div>
    </>
  );
};
