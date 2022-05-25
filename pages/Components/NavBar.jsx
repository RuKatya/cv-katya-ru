import { Link, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";
import Image from "next/image";

const NavBar = () => {
  const hasWindow = typeof window !== "undefined";

  function getWindowScroll() {
    const heightScroll = hasWindow ? window.scrollY : null;
    return heightScroll;
  }

  function getWindowWidth() {
    const width = hasWindow ? window.innerWidth : null;
    return width;
  }

  const [scrollArea, setScrollArea] = useState(getWindowScroll());
  const [windowArea, setWindowArea] = useState(getWindowWidth());
  const [toggleMenu, setToggleMenu] = useState(false);

  console.log(scrollArea);
  console.log(windowArea);

  useEffect(() => {
    const setScrollHeight = () => {
      setScrollArea(window.scrollY);
    };

    window.addEventListener("scroll", setScrollHeight);
  }, [hasWindow]);

  useEffect(() => {
    const setWindowWidth = () => {
      setWindowArea(window.innerWidth);
    };

    window.addEventListener("resize", setWindowWidth);
  }, [hasWindow]);

  const toggleNav = (e) => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav
      className="navBar"
      style={{
        background: scrollArea > 750 ? "grey" : "black",
        color: scrollArea > 750 ? "white" : "grey",
      }}
    >
      <button
        onClick={toggleNav}
        className="navBar__menuBtn"
        style={{
          background: scrollArea > 750 ? "grey" : "black",
        }}
      >
        <Image
          src={scrollArea > 750 ? "/img/menu-white.png" : "/img/menu-grey.png"}
          alt="menu"
          width={windowArea < 350 ? 30 : 40}
          height={windowArea < 350 ? 30 : 40}
        />
      </button>
      {(toggleMenu || windowArea > 700) && (
        <>
          <Link to="enterLayer" smooth={true}>
            Home
          </Link>
          <Link to="about" smooth={true}>
            About
          </Link>
          <Link to="projects" smooth={true}>
            Projects
          </Link>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
