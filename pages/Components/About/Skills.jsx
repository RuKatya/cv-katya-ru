import { useEffect, useState } from "react";

const Skills = () => {
  const skills = [
    { name: "HTML" },
    { name: "SCSS" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "EJS" },
    { name: "React" },
    { name: "Redux" },
    { name: "NextJS" },
    { name: "NodeJS" },
    { name: "MongoDB" },
  ];

  const [widthSkill, setWidthSkill] = useState(false);
  const [scrollArea, setScrollArea] = useState(getWindowScroll());

  const hasWindow = typeof window !== "undefined";

  function getWindowScroll() {
    const heightScroll = hasWindow ? window.scrollY : 0;
    return heightScroll;
  }

  useEffect(() => {
    const setScrollHeight = () => {
      setScrollArea(window.scrollY);
    };

    window.addEventListener("scroll", setScrollHeight);
  }, [hasWindow]);

  useEffect(() => {
    if (scrollArea > 400) {
      setTimeout(() => {
        setWidthSkill(true);
      }, 0);
    }
  });

  return (
    <ul className="about__content--skills">
      {skills.map((skill, index) => {
        return (
          <li key={index} className="about__content--eachSkill">
            {/* <span className="about__content--eachSkill__skillName"> */}
            {skill.name}
            {/* </span> */}

            {/* <div className="about__content--eachSkill__slider">
              <div
                className="about__content--eachSkill__sliderThumb"
                style={{
                  width: widthSkill ? `${skill.percent}%` : 0,
                }}
              ></div>
            </div> */}
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
