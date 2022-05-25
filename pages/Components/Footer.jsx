import { Link, animateScroll as scroll } from "react-scroll";
import Contacts from "./Contacts";

const Footer = () => {
  return (
    <footer className="footerBar">
      <Link to="enterLayer" smooth={true}>
        UP
      </Link>
      <Contacts />
    </footer>
  );
};

export default Footer;
