import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <main className="flex justify-end items-center text-xl bg-ctp-base">
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        className="m-4"
        id="homebutton"
      >
        <button>Home</button>
      </ScrollLink>
      <ScrollLink
        to="aboutme"
        smooth={true}
        duration={500}
        className="m-4"
        id="aboutbutton"
      >
        <button>About</button>
      </ScrollLink>
      <ScrollLink
        to="skills"
        smooth={true}
        duration={500}
        className="m-4"
        id="skillsbutton"
      >
        <button>Skills</button>
      </ScrollLink>
      <ScrollLink
        to="projects"
        smooth={true}
        duration={500}
        className="m-4"
        id="projectsbutton"
      >
        <button>Projects</button>
      </ScrollLink>
      <div className="w-8"></div>
    </main>
  );
}
