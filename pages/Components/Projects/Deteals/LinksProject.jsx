import Link from "next/link";

const LinksProject = ({ links }) => {
  console.log(links);

  console.log(links.url.length);
  return (
    <div className="detealsProject__window--links">
      <Link href={links.git}>
        <a target="_blank" rel="noreferrer">
          Github
        </a>
      </Link>

      {links.url.length > 1 ? (
        <Link href={links.url}>
          <a target="_blank" rel="noreferrer">
            Live
          </a>
        </Link>
      ) : null}
    </div>
  );
};

export default LinksProject;
