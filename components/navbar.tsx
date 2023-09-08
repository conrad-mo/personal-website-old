import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <main className="flex justify-end items-center text-xl bg-ctp-base">
      <ScrollLink to="home" smooth={true} duration={500} className="m-2" id="homebutton">
        <button className="rounded-lg border-2 border-transparent px-2 py-1 transition-colors hover:border-ctp-text hover:bg-ctp-surface2 active:bg-ctp-surface2/50">
          Home
        </button>
      </ScrollLink>
      <ScrollLink
        to="aboutme"
        smooth={true}
        duration={500}
        className="m-2"
        id="aboutbutton"
      >
        <button className="rounded-lg border-2 border-transparent px-2 py-1 transition-colors hover:border-ctp-text hover:bg-ctp-surface2 active:bg-ctp-surface2/50">About</button>
      </ScrollLink>
      <ScrollLink
        to="skills"
        smooth={true}
        duration={500}
        className="m-2"
        id="skillsbutton"
      >
        <button className="rounded-lg border-2 border-transparent px-2 py-1 transition-colors hover:border-ctp-text hover:bg-ctp-surface2 active:bg-ctp-surface2/50">Skills</button>
      </ScrollLink>
      <ScrollLink
        to="projects"
        smooth={true}
        duration={500}
        className="m-2"
        id="projectsbutton"
      >
        <button className="rounded-lg border-2 border-transparent px-2 py-1 transition-colors hover:border-ctp-text hover:bg-ctp-surface2 active:bg-ctp-surface2/50">Projects</button>
      </ScrollLink>
      <div className="w-8"></div>
    </main>
  );
}
