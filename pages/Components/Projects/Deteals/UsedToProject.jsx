const UsedToProject = ({ used }) => {
  return (
    <ul className="detealsProject__window--usedTo">
      {used.map((use, index) => {
        return <li key={index}>{use}</li>;
      })}
    </ul>
  );
};

export default UsedToProject;
