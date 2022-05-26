import Image from "next/image";

const Project = ({ project }) => {
  return (
    <>
      {project ? (
        <div key={project._id} className="projects__singleProject">
          <Image
            src={project.mainImg}
            alt={project.title}
            width={450}
            height={500}
            className="projects__singleProject--img"
          />
          <div className="projects__singleProject--title">
            <h3>{project.title}</h3>
            <button>Learn More</button>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default Project;
