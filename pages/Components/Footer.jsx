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

      <div className="footerBar__contactText">
        <p>Have you any project in your mind?</p>
        <p>Let's talk now!</p>
        <div className="footerBar__contactInfo">
          <h3>Contact Info</h3>
          <a href="tel:+972526299431">+972 52-629-9431</a>
          <a href="mailto:katya.ru.fullstack@gmail.com">
            katya.ru.fullstack@gmail.com
          </a>
        </div>
      </div>

      <Contacts windowArea={windowArea} />

      <div className="footerBar__copyright">
        <p className="footerBar__copyright--symbol">
          <CopyrightIcon sx={{ fontSize: 17 }} />
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
