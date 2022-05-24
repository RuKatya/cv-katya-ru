const Projects = ({ project, key }) => {
  // console.log(project);
  return (
    <div key={key}>
      <h2>{project.title}</h2>
    </div>
  );
};

export default Projects;
