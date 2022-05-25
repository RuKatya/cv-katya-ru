import { Link, animateScroll as scroll } from "react-scroll";
import Contacts from "./Contacts";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <footer className="footerBar">
      <Link to="enterLayer" smooth={true} className="footerBar__upBtn">
        <KeyboardArrowUpIcon fontSize="large" />
      </Link>
      <Contacts />
      <div className="footerBar__copyright">
        <p className="footerBar__copyright--symbol">
          <CopyrightIcon sx={{ fontSize: 15 }} />
        </p>
        <p className="footerBar__copyright--name">Katya Rukosuev 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
