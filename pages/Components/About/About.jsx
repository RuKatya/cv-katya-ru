import MoreMe from "./MoreMe";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about" className="about">
      <h2>About</h2>
      <div className="about__content">
        <div className="about__content--infoText">
          <p>
            Hi, I'm Katya. I'll help you develop your ideas. I always improve my
            skills.
          </p>
          <p>
            I love creating websites that are user-friendly and easy to use, I
            read related books.
          </p>

          <p>Every time I finnish a project I start thinking about the next.</p>
        </div>
        <Skills />
      </div>
      <MoreMe />
    </div>
  );
};

export default About;
