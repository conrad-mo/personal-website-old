import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {
  IoDocumentText,
  // IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";
import { SiD, SiDevpost } from "react-icons/si";

export default function Navbar() {
  return (
    <main className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center bg-ctp-base p-4 lg:p-0">
      <div className="flex items-center text-xl lg:ml-8 gap-4">
        <a
          href="/Conrad_Mo_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <button aria-label="Resume" className="rounded-lg border-2 border-transparent px-2 py-1 transition-colors hover:border-ctp-text hover:bg-ctp-surface2 active:bg-ctp-surface2/50">
            <IoDocumentText />
          </button>
        </a>
        {/* <a
          href="https://www.instagram.com/conrad.mo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <button aria-label="Instagram" className="rounded-lg border-2 border-transparent px-2 py-1 transition-colors hover:border-ctp-text hover:bg-ctp-surface2 active:bg-ctp-surface2/50">
            <IoLogoInstagram />
          </button>
        </a> */}
        <a
          href="https://www.linkedin.com/in/conradmo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <button aria-label="Linkedin" className="rounded-lg border-2 border-transparent px-2 py-1 transition-colors hover:border-ctp-text hover:bg-ctp-surface2 active:bg-ctp-surface2/50">
            <IoLogoLinkedin />
          </button>
        </a>
        <a
          href="https://github.com/fedxjk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <button aria-label="Github" className="rounded-lg border-2 border-transparent px-2 py-1 transition-colors hover:border-ctp-text hover:bg-ctp-surface2 active:bg-ctp-surface2/50">
            <IoLogoGithub />
          </button>
        </a>
        {/* <a
          href="https://devpost.com/conradmo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Devpost"
        >
          <button aria-label="Github" className="rounded-lg border-2 border-transparent px-2 py-1 transition-colors hover:border-ctp-text hover:bg-ctp-surface2 active:bg-ctp-surface2/50">
            <SiDevpost />
          </button>
        </a> */}
      </div>
      <div className="flex justify-center lg:justify-end items-center text-xl">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="m-2"
          id="homebutton"
        >
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
          <button className="rounded-lg border-2 border-transparent px-2 py-1 transition-colors hover:border-ctp-text hover:bg-ctp-surface2 active:bg-ctp-surface2/50">
            About
          </button>
        </ScrollLink>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={500}
          className="m-2"
          id="skillsbutton"
        >
          <button className="rounded-lg border-2 border-transparent px-2 py-1 transition-colors hover:border-ctp-text hover:bg-ctp-surface2 active:bg-ctp-surface2/50">
            Skills
          </button>
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="m-2"
          id="projectsbutton"
        >
          <button className="rounded-lg border-2 border-transparent px-2 py-1 transition-colors hover:border-ctp-text hover:bg-ctp-surface2 active:bg-ctp-surface2/50">
            Projects
          </button>
        </ScrollLink>
        <div className="lg:w-8"></div>
      </div>
    </main>
  );
}
