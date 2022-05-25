const Project = ({ project }) => {
  return (
    <>
      {project ? (
        <div key={project._id}>
          <h2>{project.title}</h2>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default Project;
