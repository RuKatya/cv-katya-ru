import Link from "next/link";
import Project from "./Project";

const Projects = ({ projects, getProjects }) => {
  return (
    <div id="projects" className="projects">
      <div className="projects__allProjects">
        {projects ? (
          projects.map((project) => {
            return (
              <Project
                key={project._id}
                project={project}
                getProjects={getProjects}
              />
            );
          })
        ) : (
          <div>Loading</div>
        )}
        <Link href="https://frontend-projects.onrender.com">
          <a className="projects__mentorProjectsBtn">
            Frontend Mentor Projects
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
