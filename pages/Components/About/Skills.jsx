import { useEffect, useState } from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", percent: 80 },
    { name: "SCSS", percent: 80 },
    { name: "JavaScript", percent: 70 },
    { name: "TypeScript", percent: 50 },
    { name: "EJS", percent: 40 },
    { name: "React", percent: 70 },
    { name: "Redux", percent: 60 },
    { name: "NextJS", percent: 50 },
    { name: "NodeJS", percent: 60 },
    { name: "MongoDB", percent: 50 },
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
  // console.log(scrollArea);
  return (
    <ul className="about__content--skills">
      {skills.map((skill, index) => {
        return (
          <li key={index} className="about__content--eachSkill">
            <span className="about__content--eachSkill__skillName">
              {skill.name}
            </span>

            <div className="about__content--eachSkill__slider">
              <div
                className="about__content--eachSkill__sliderThumb"
                style={{
                  width: widthSkill ? `${skill.percent}%` : 0,
                }}
              ></div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
