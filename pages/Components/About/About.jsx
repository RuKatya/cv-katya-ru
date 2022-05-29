import MoreMe from "./MoreMe";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about" className="about">
      <h2>About</h2>
      <div className="about__content">
        <p className="about__content--infoText">
          text about me text about metext about metext about metext about me
          text about me text about metext about metext about metext about metext
          about me text about metext about metext about metext about me
        </p>
        <Skills />
      </div>
      <MoreMe />
    </div>
  );
};

export default About;
