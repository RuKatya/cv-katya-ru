import React from "react";

const UsedToProject = ({ used }) => {
  // console.log(used);
  return (
    <ul>
      {used.map((use, index) => {
        return <li key={index}>{use}</li>;
      })}
    </ul>
  );
};

export default UsedToProject;
