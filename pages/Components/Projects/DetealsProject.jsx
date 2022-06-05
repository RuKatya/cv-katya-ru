import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import UsedToProject from "./Deteals/UsedToProject";
import ImagesProjec from "./Deteals/ImagesProjec";

const DetealsProject = ({ detealsProject, setOpenProject }) => {
  return (
    <div className="detealsProject">
      <div className="detealsProject__window">
        {/* CLOSE BTN */}
        <CloseIcon
          onClick={() => {
            setOpenProject(false);
          }}
          className="detealsProject__window--closeBtn"
          sx={{ fontSize: 30 }}
        />

        {/* IMAGES OF PROJECT */}
        <ImagesProjec project={detealsProject} />

        {/* USED TO */}
        <UsedToProject used={detealsProject.usedTo} />
      </div>
    </div>
  );
};

export default DetealsProject;
