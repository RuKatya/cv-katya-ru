import { Link, animateScroll as scroll } from "react-scroll";
import Contacts from "./Contacts";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = () => {
  return (
    <footer className="footerBar">
      <Link to="enterLayer" smooth={true} className="footerBar__upBtn">
        <KeyboardArrowUpIcon fontSize="large" />
      </Link>
      <Contacts />
    </footer>
  );
};

export default Footer;
