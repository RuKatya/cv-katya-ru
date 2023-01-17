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
  const [openProject, setOpenProject] = useState(false);
  const [detealsProject, setDetealsProject] = useState({});

  console.log('%c Welcome!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%;');

  console.log('%c I glad to see you here!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%;');

  console.log('%c ', 'font-size: 1px; padding: 215px 385px; background-size: 770px 430px; background: no-repeat url(https://i0.wp.com/i.giphy.com/media/ZVik7pBtu9dNS/giphy-downsized.gif?w=770&amp;ssl=1);');

  function getProjects(idProject) {
    setOpenProject(true);
    const projectFind = projects.filter((i) => i._id == idProject);
    setDetealsProject(projectFind[0]);
  }

  useEffect(() => {
    function change() {
      if (openProject === true) {
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