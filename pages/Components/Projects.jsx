const Projects = ({ project }) => {
  return (
    <div id="projects">
      {project ? (
        <div key={project._id}>
          <h2>{project.title}</h2>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Projects;
