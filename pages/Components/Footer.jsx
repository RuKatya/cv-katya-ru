import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <footer>
        <Link to="enterLayer" smooth={true}>
          UP
        </Link>
      </footer>
    </>
  );
};

export default Footer;
