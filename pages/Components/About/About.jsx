import { Link, animateScroll as scroll } from "react-scroll";
import MoreMe from "./MoreMe";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about__content">
        <div className="about__content--infoText">
          <p>Hi, I'm Katya.</p>

          <p>I am teacher assistant, web tutor and just a nice person.</p>
          <p>
            For over a year I have been teaching Full Stack (MERN). Every time I
            see students succeed in their projects, it gives me great pleasure.
          </p>

          <p>
            I love creating user-friendly and easy to use websites. To get
            better I'm staying up to date by checking regularly for updates. I'm
            constantly improving my knowledge in web development.
          </p>

          <p>
            I can help you develop your ideas in to site. I’m very passionate
            about my job and motivated to create new and adventurous websites.
          </p>

          <p>
            You can leave me a message via{" "}
            <Link
              to="contact"
              smooth={true}
              style={{ color: "rgb(164,110,0)" }}
            >
              Form
            </Link>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/katya-rukosuev/"
              style={{ color: "rgb(164,110,0)" }}
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>{" "}
            or{" "}
            <a
              href="mailto:katya.ru.fullstack@gmail.com"
              style={{ color: "rgb(164,110,0)" }}
              target="_blank"
              rel="noreferrer"
            >
              E-Mail
            </a>
          </p>
        </div>
        <Skills />
      </div>
      <MoreMe />
    </div>
  );
};

export default About;
