import Link from "next/link";
import clientPromise from "../lib/mongodb";
import EnterPage from './Components/EnterPage';
import About from './Components/About/About';
// import Projects from './Components/Project';
import Form from './Components/Form';
import Projects from "./Components/Projects/Projects";
import Books from "./Components/Books";
import { useState, useEffect } from "react";
import DetealsProject from "./Components/Projects/DetealsProject";

export default function Home({ projects }) {
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
      <EnterPage />
      <About />
      <Projects projects={projects} setOpenProject={setOpenProject} openProject={openProject} getProjects={getProjects} />
      {openProject ? (
        <div>
          <DetealsProject
            detealsProject={detealsProject}
            setOpenProject={setOpenProject}
          />
        </div>
      ) : null}
      <Books />
      <Form />
    </div>
  )
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("mycv");

  let projects = await db.collection("projects").find({}).toArray();
  projects = JSON.parse(JSON.stringify(projects));

  return {
    props: { projects },
  };
}