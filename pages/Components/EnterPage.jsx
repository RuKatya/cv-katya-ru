import { Link, animateScroll as scroll } from "react-scroll";

const EnterPage = () => {
  return (
    <div id="enterLayer" className="enterLayer">
      <div className="enterLayer__container" id="board"></div>
      <div className="enterLayer__greetings">
        <p>
          Hello, I'm <span>Katya Rukosuev</span>
        </p>
        <p>
          <span>Frontend</span> web developer
        </p>
      </div>
      <Link
        to="projects"
        smooth={true}
        className="enterLayer__showProjects effect"
      >
        View my work
      </Link>
    </div>
  );
};

export default EnterPage;
