import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const hasWindow = typeof window !== "undefined";

  function getWindowScroll() {
    const heightScroll = hasWindow ? window.scrollY : 0;
    return heightScroll;
  }

  function getWindowWidth() {
    const width = hasWindow ? window.innerWidth : 1920;
    return width;
  }

  const [scrollArea, setScrollArea] = useState(getWindowScroll());
  const [windowArea, setWindowArea] = useState(getWindowWidth());

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
  return (
    <>
      <NavBar scrollArea={scrollArea} windowArea={windowArea} />
      <main>{children}</main>
      <Footer windowArea={windowArea} />
    </>
  );
}
