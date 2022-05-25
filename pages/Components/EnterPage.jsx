import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const EnterPage = () => {
  // const hasWindow = typeof window !== "undefined";

  // function getWindowDimensions() {
  //   const width = hasWindow ? window.innerWidth : null;
  //   return width;
  // }

  // const [screenWidth, setScreenWidth] = useState(getWindowDimensions());

  // useEffect(() => {
  //   if (hasWindow) {
  //     function handleResize() {
  //       setScreenWidth(getWindowDimensions());
  //     }

  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }
  // }, [hasWindow]);

  // console.log(screenWidth);

  // const colors = [
  //   "rgb(204, 109, 109)",
  //   "rgb(204, 198, 109)",
  //   "rgb(117, 204, 109)",
  //   "rgb(109, 185, 204)",
  //   "rgb(109, 96, 223)",
  //   "rgb(162, 96, 223)",
  //   "rgb(223, 96, 223)",
  // ];

  // const SQUARES_NUMBER = 2 * screenWidth;
  // console.log(SQUARES_NUMBER);

  // useEffect(() => {
  //   for (let i = 0; i < SQUARES_NUMBER; i++) {
  //     const board = document.querySelector("#board");
  //     const square = document.createElement("div");
  //     square.classList.add("square");

  //     square.addEventListener("mouseover", () => {
  //       setColor(square);
  //     });

  //     square.addEventListener("mouseleave", () => {
  //       removeColor(square);
  //     });

  //     board.append(square);
  //   }

  //   function setColor(element) {
  //     const color = getRandomColor();
  //     element.style.backgroundColor = color;
  //     element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  //   }

  //   function removeColor(element) {
  //     const color = getRandomColor();
  //     element.style.backgroundColor = "black";
  //     element.style.boxShadow = `0 0 2px 3px ${color}`;
  //   }

  //   function getRandomColor() {
  //     const random = Math.floor(Math.random() * colors.length);
  //     return colors[random];
  //   }
  // }, [SQUARES_NUMBER]);

  return (
    <div id="enterLayer" className="enterLayer">
      <div className="enterLayer__container" id="board"></div>
      <div className="enterLayer__greetings">
        <p>Hello, I'm Katya Rukosuev.</p>
        <p>I'm a full-stack web developer.</p>
      </div>
      {/* <Link to="projects" smooth={true}>
        View my work
      </Link> */}
    </div>
  );
};

export default EnterPage;
