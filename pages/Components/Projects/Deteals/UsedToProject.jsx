const UsedToProject = ({ used }) => {
  return (
    <ul className="detealsProject__window--usedTo">
      {used.map((use, index) => {
        return (
          <li
            key={index}
            style={{
              color: use.includes("Phone only") ? "#fe7d7d" : "#C3C6C7",
            }}
          >
            {use}
          </li>
        );
      })}
    </ul>
  );
};

export default UsedToProject;
