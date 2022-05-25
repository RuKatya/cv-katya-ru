import { Link, animateScroll as scroll } from "react-scroll";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const EnterPage = () => {
  return (
    <div id="enterLayer" className="enterLayer">
      <div className="enterLayer__container" id="board"></div>
      <div className="enterLayer__greetings">
        <p>Hello, I'm Katya Rukosuev.</p>
        <p>I'm a full-stack web developer.</p>
      </div>
      <div className="enterLayer__showProjects">
        <Link to="projects" smooth={true}>
          View my work
        </Link>
        <span>
          <NavigateNextIcon
            sx={{
              fontSize: 20,
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default EnterPage;
