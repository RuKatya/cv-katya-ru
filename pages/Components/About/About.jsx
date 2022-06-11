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
            better I reading related books. I am always improving my knowledge
            in web development.
          </p>

          <p>
            Every time I finish a project, I start thinking about the next one
            and how it can be done more useful.
          </p>

          <p>
            I will help you develop your ideas on the site. You can contact me
            via the form or send a message via Linkdin or E-Mail.
          </p>
        </div>
        <Skills />
      </div>
      <MoreMe />
    </div>
  );
};

export default About;
