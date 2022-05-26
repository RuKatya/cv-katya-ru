const Skills = () => {
  const skills = [
    { name: "HTML", percent: 80 },
    { name: "SCSS", percent: 80 },
    { name: "JavaScript", percent: 70 },
    { name: "TypeScript", percent: 50 },
    { name: "React", percent: 70 },
    { name: "NodeJS", percent: 60 },
    { name: "MongoDB", percent: 50 },
  ];

  return (
    <ul className="about__content--skills">
      {skills.map((skill) => {
        return (
          <li key={skill.index} className="about__content--eachSkill">
            <span>{skill.name}</span>
            <span>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={skill.percent}
                className="about__content--slider"
              />
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
