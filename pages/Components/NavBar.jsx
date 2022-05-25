import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ scrollArea, windowArea }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = (e) => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav
      className="navBar"
      style={{
        background: scrollArea > 750 ? "rgb(29, 29, 29)" : "black",
        color: scrollArea > 750 ? "white" : "rgb(212, 212, 212)",
      }}
    >
      <button
        onClick={toggleNav}
        className="navBar__menuBtn"
        style={{
          background: scrollArea > 750 ? "rgb(29, 29, 29)" : "black",
        }}
      >
        <MenuIcon
          sx={{
            color: scrollArea > 750 ? "white" : "rgb(94, 93, 93)",
            width: windowArea < 400 ? "40px" : "50px",
            height: windowArea < 400 ? "40px" : "50px",
          }}
        />
      </button>
      {(toggleMenu || windowArea > 700) && (
        <div className="navBar__links">
          <Link to="enterLayer" smooth={true} onClick={toggleNav}>
            Home
          </Link>
          <Link to="about" smooth={true} onClick={toggleNav}>
            About
          </Link>
          <Link to="projects" smooth={true} onClick={toggleNav}>
            Projects
          </Link>
          <Link to="contact" smooth={true} onClick={toggleNav}>
            Contact
          </Link>
          <Link to="" target="_blank"></Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
