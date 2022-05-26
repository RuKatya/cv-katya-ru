import Image from "next/image";

const Project = ({ project }) => {
  return (
    <>
      <div key={project._id} className="projects__singleProject">
        <Image
          src={project.mainImg}
          alt={project.title}
          width={600}
          height={600}
          className="projects__singleProject--img"
        />
        <div className="projects__singleProject--title">
          <h3>{project.title}</h3>
          <button>Learn More</button>
        </div>
      </div>
    </>
  );
};

export default Project;
