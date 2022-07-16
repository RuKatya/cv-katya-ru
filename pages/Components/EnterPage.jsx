import { Link, animateScroll as scroll } from "react-scroll";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const EnterPage = () => {
  return (
    <div id="enterLayer" className="enterLayer">
      <div className="enterLayer__container" id="board"></div>
      <div className="enterLayer__greetings">
        <p>
          Hello, I'm <span>Katya Rukosuev</span>.
        </p>
        <p>
          I'm a <span>Front-end</span> web developer.
        </p>
      </div>
      {/* <div className="enterLayer__showProjects"> */}
      <Link
        to="projects"
        smooth={true}
        className="enterLayer__showProjects effect"
      >
        View my work
      </Link>
      {/* <NavigateNextIcon
          sx={{
            fontSize: 20,
          }}
        /> */}
      {/* </div> */}
    </div>
  );
};

export default EnterPage;
