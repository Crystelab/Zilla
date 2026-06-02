import { useState } from "react";
import { FaCog } from "react-icons/fa";
import { useProjectContext } from "../../contexts/ProjectContext";import { IProject } from "../../types/project";

type Props = {
  project: IProject;
};


function ProjectSettingsButton(props: Props) {
const { openProjectSettings } = useProjectContext();
  return (
    <button onClick={() => openProjectSettings(true)}>
      <FaCog size={30}/>
    </button>
  );
}

export default ProjectSettingsButton;