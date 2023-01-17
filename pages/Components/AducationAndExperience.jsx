import React from "react";
import CardEdAndEx from "./CardEdAndEx";

const AducationAndExperience = () => {
  const myEducation = [
    {
      years: "August 2020 – August 2021",
      title: "Full stack course",
      place: "Int College",
      more: [
        {
          text: "Building a Trivia Challenge using React, MongoDB and NodeJS.",
        },
        {
          text: "Building a website for Viviross using NextJS, React, Redux, NodeJS and MySQL.",
        },
        { text: "Ability to operate in a fast-paced environment." },
      ],
    },
  ];

  const myExperience = [
    {
      years: "October 2021 - Now",
      title: "Teaching Assistant",
      place: "Int College",
      more: [
        {
          text: "Practicing course skills: HTML, CSS, SCSS, JavaScript, TypeScript, React, NodeJS, MongoDB and MySQL.",
        },
        { text: "Problem solving assistance." },
        { text: "Accompanying project." },
      ],
    },
    {
      years: "January 2021 - Now",
      title: "Web tutor",
      place: "Self Employed",
      more: [
        { text: "Advice on projects" },
        { text: "Explain unclear material" },
        { text: "Teaching new material" },
      ],
    },
  ];
  return (
    <div class="aducationAndExperience">
      <div className="aducationAndExperience__aducation">
        <h1>Education</h1>
        {myEducation.map((ed) => (
          <CardEdAndEx info={ed} />
        ))}
      </div>

      <div className="aducationAndExperience__experience">
        <h1>Experience</h1>
        {myExperience.map((ex) => (
          <CardEdAndEx info={ex} />
        ))}
      </div>
    </div>
  );
};

export default AducationAndExperience;
