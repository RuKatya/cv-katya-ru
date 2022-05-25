import clientPromise from "../lib/mongodb";
import EnterPage from './Components/EnterPage';
import About from './Components/About';
import Projects from './Components/Project';
import Form from './Components/Form';

export default function Home({ projects }) {


  return (
    <div className="mainPage">
      <EnterPage />
      <About />
      <div id="projects">
        {projects.map(project => {
          return (
            <Projects project={project} key={project._id} />
          )
        })}
      </div>
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