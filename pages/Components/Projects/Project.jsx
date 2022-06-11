import Image from "next/image";
import { useEffect, useState } from "react";

const Project = ({ project, getProjects }) => {
  const src = `/img/${project.folder}/${project.mainImg}.jpg`;

  return (
    <>
      {project ? (
        <div key={project._id} className="projects__singleProject">
          <Image
            src={src}
            alt={project.title}
            width={450}
            height={500}
            className="projects__singleProject--img"
          />
          <div className="projects__singleProject--title">
            <h3>{project.title}</h3>
            <button
              className="projects__singleProject--learnMoreBtn"
              onClick={() => {
                getProjects(project._id);
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      ) : (
        <div className="loadingProject">
          <div>Loading</div>
          <div className="loadingProject__dots">...</div>
        </div>
      )}
    </>
  );
};

export default Project;
