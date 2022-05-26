import Link from "next/link";
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
      <div id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects__allProjects">
          {projects.map(project => {
            return (
              <Projects project={project} key={project._id} />
            )
          })}
          <Link href="https://frontend-challenges-projects.vercel.app/">
            <a className="projects__mentorProjectsBtn">
              Frontend Mentor Projects
            </a>
          </Link>
        </div>
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