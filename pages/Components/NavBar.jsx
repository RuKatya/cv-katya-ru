import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ scrollArea, windowArea }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [flag, setFlag] = useState(false);

  const toggleNav = (e) => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    if (windowArea < 700) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [windowArea]);

  return (
    <nav
      className="navBar"
      style={{
        background: scrollArea > 750 ? "#0f1319" : "#0B0C10",
      }}
    >
      <button
        onClick={toggleNav}
        className="navBar__menuBtn"
        style={{
          background: "none",
        }}
      >
        <MenuIcon
          sx={{
            color: "#C3C6C7",
            width: windowArea < 400 ? "40px" : "50px",
            height: windowArea < 400 ? "40px" : "50px",
          }}
        />
      </button>
      {(toggleMenu || windowArea > 700) && (
        <div className="navBar__links">
          <Link
            to="enterLayer"
            smooth={true}
            onClick={() => {
              if (flag === true) {
                toggleNav();
              }
            }}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            onClick={() => {
              if (flag === true) {
                toggleNav();
              }
            }}
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            onClick={() => {
              if (flag === true) {
                toggleNav();
              }
            }}
          >
            Projects
          </Link>
          <Link
            to="books"
            smooth={true}
            onClick={() => {
              if (flag === true) {
                toggleNav();
              }
            }}
          >
            Books
          </Link>
          <Link
            to="contact"
            smooth={true}
            onClick={() => {
              if (flag === true) {
                toggleNav();
              }
            }}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
