import Link from "next/link";
import Project from "./Project";

const Projects = ({ projects, getProjects }) => {
  return (
    <div id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects__allProjects">
        {projects ? (
          projects.map((project) => {
            return (
              <Project
                project={project}
                key={project._id}
                getProjects={getProjects}
              />
            );
          })
        ) : (
          <div>Loading</div>
        )}
        <Link href="https://frontend-projects.onrender.com//">
          <a className="projects__mentorProjectsBtn">
            Frontend Mentor Projects
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
