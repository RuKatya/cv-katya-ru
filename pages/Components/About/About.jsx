import { Link, animateScroll as scroll } from "react-scroll";
import MoreMe from "./MoreMe";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about" className="about">
      <h2>About</h2>
      <div className="about__content">
        <div className="about__content--infoText">
          <p>Hi, I'm Katya.</p>

          <p>
            I love creating user-friendly and easy to use websites, to get
            better I'm reading related books. I'm always improving my knowledge
            in web development.
          </p>

          <p>
            Every time I finish a project, I start thinking about the next one
            and how it can be done more useful.
          </p>

          <p>
            I will help you develop your ideas on the site. I’m very passionate
            about my job and motivated to create new and adventurous websites.
            You can contact me via the{" "}
            <Link to="contact" smooth={true} style={{ color: "#66FCF1" }}>
              form
            </Link>{" "}
            or send a message via{" "}
            <a
              href="https://www.linkedin.com/in/katya-rukosuev/"
              style={{ color: "#66FCF1" }}
            >
              Linkedin
            </a>{" "}
            or{" "}
            <a
              href="mailto:katya.ru.fullstack@gmail.com"
              style={{ color: "#66FCF1" }}
            >
              E-Mail
            </a>
            .
          </p>
        </div>
        <Skills />
      </div>
      <MoreMe />
    </div>
  );
};

export default About;
