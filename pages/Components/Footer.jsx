import { Link, animateScroll as scroll } from "react-scroll";
import Contacts from "./Contacts";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = ({ windowArea }) => {
  return (
    <footer className="footerBar">
      <Link to="enterLayer" smooth={true} className="footerBar__upBtn">
        <KeyboardArrowUpIcon fontSize="large" />
      </Link>
      <Contacts windowArea={windowArea} />
      <div className="footerBar__copyright">
        <p className="footerBar__copyright--symbol">
          <CopyrightIcon sx={{ fontSize: windowArea > 700 ? 15 : 20 }} />
        </p>
        <p className="footerBar__copyright--name">
          <a
            href="https://www.linkedin.com/in/katya-rukosuev/"
            target="_blank"
            rel="noreferrer"
          >
            Katya Rukosuev 2022
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
