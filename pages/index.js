import clientPromise from "../lib/mongodb";
import EnterPage from './Components/EnterPage';
import About from './Components/About/About';
import Form from './Components/Form';
import Projects from "./Components/Projects/Projects";
import Books from "./Components/Books";
import { useState, useEffect } from "react";
import DetealsProject from "./Components/Projects/DetealsProject";
import Reviews from "./Components/Reviews/Reviews";
// import Reviews from "./Components/Reviews";

export default function Home({ projects, reviews }) {
  console.log(reviews)
  console.log(projects)
  const [openProject, setOpenProject] = useState(false);
  const [detealsProject, setDetealsProject] = useState({});

  function getProjects(idProject) {
    setOpenProject(true);
    const projectFind = projects.filter((i) => i._id == idProject);
    setDetealsProject(projectFind[0]);
  }

  useEffect(() => {
    function change() {
      if (openProject === true) {
        console.log(`true`)
        document.body.style = 'overflow-y:hidden'
      } else {
        document.body.style = 'overflow-y:scroll'
      }
    }

    change();
  }, [openProject])

  return (
    <div className="mainPage">
      <EnterPage projects={projects} setOpenProject={setOpenProject} openProject={openProject} getProjects={getProjects} />
      {openProject && (
        <div>
          <DetealsProject
            detealsProject={detealsProject}
            setOpenProject={setOpenProject}
          />
        </div>
      )}
      <About />
      <Reviews reviews={reviews} />
      <Form />
    </div>
  )
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("mycv");

  let projects = await db.collection("projects").find({}).toArray();
  projects = JSON.parse(JSON.stringify(projects));
  let reviews = await db.collection("reviews").find({}).toArray();
  reviews = JSON.parse(JSON.stringify(reviews));

  return {
    props: { projects, reviews },
  };
}