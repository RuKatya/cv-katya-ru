import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import UsedToProject from "./Deteals/UsedToProject";

const DetealsProject = ({ detealsProject, setOpenProject }) => {
  console.log(detealsProject);
  return (
    <div className="detealsProject">
      <div className="detealsProject__window">
        <CloseIcon
          onClick={() => {
            setOpenProject(false);
          }}
          className="detealsProject__window--closeBtn"
          sx={{ fontSize: 30 }}
        />
        <UsedToProject used={detealsProject.usedTo} />
      </div>
    </div>
  );
};

export default DetealsProject;
