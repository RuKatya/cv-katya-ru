import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import UsedToProject from "./Deteals/UsedToProject";
import ImagesProjec from "./Deteals/ImagesProjec";
import DescriptionProject from "./Deteals/DescriptionProject";
import LinksProject from "./Deteals/LinksProject";

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

        {/* DESCRIPTION */}
        <DescriptionProject desc={detealsProject.desc} />

        {/* LINKS */}
        <LinksProject
          links={{ git: detealsProject.github, url: detealsProject.url }}
        />
      </div>
    </div>
  );
};

export default DetealsProject;
