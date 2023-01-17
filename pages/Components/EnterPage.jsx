import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Projects from "./Projects/Projects";

const EnterPage = ({ projects, setOpenProject, openProject, getProjects }) => {
  const hasWindow = typeof window !== "undefined";

  function getWindowScroll() {
    const heightScroll = hasWindow ? window.scrollY : 0;
    return heightScroll;
  }

  useEffect(() => {
    const setScrollHeight = () => {
      setScrollArea(window.scrollY);
    };

    window.addEventListener("scroll", setScrollHeight);
  }, [hasWindow]);

  const [scrollArea, setScrollArea] = useState(getWindowScroll());

  return (
    <div className="enterLayer">
      <div className="enterLayer__container">
        <div className="enterLayer__container--text">
          <div>Hello, I'm Katya Rukosuev</div>
          <div className="webDevTitle">Web Developer</div>
          <div className="arrow-down">
            {scrollArea < 550 ? <span></span> : null}
          </div>
        </div>
        <div className="projects">
          <Projects
            projects={projects}
            setOpenProject={setOpenProject}
            openProject={openProject}
            getProjects={getProjects}
          />
        </div>
      </div>
    </div>
  );
};

export default EnterPage;

// <div id="enterLayer" className="enterLayer">
//   <div className="enterLayer__container" id="board"></div>
//   <div className="enterLayer__greetings">
//     <p>
//       Hello, I'm <span>Katya Rukosuev</span>
//     </p>
//     <p>
//       <span>Frontend</span> web developer
//     </p>
//   </div>
//   <Link
//     to="projects"
//     smooth={true}
//     className="enterLayer__showProjects effect"
//   >
//     View my work
//   </Link>
// </div>
