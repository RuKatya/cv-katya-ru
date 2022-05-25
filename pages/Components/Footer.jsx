import { Link, animateScroll as scroll } from "react-scroll";
import Contacts from "./Contacts";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = ({ windowArea }) => {
  return (
    <footer className="footerBar">
      <Link to="enterLayer" smooth={true} className="footerBar__upBtn">
        <a>
          <KeyboardArrowUpIcon fontSize="large" />
        </a>
      </Link>
      <Contacts windowArea={windowArea} />
      <div className="footerBar__copyright">
        <p className="footerBar__copyright--symbol">
          <CopyrightIcon sx={{ fontSize: windowArea > 700 ? 15 : 20 }} />
        </p>
        <p className="footerBar__copyright--name">Katya Rukosuev 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
