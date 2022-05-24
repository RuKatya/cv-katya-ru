// import Navbar from "./navbar";
// import Footer from "./footer";
import { Link, animateScroll as scroll } from "react-scroll";
// import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      {/* <nav>NAVNAVNAV</nav> */}
      <nav
        className="navBar"
        id="navBar"
        style={{
          position: "fixed",
          top: "0",
          zIndex: "10",
          color: "white",
        }}
      >
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
      </nav>
      <main>{children}</main>
      {/* <Footer /> */}
      <footer>
        <Link to="enterLayer" smooth={true}>
          UP
        </Link>
      </footer>
    </>
  );
}
