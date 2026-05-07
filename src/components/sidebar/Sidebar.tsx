import { IProject } from "../../types/project";
import DarkModeButton from "./DarkModeButton";
import { LabelList } from "./label/LabelList";
import { ProjectList } from "./project/ProjectList";

function Sidebar({
  onProjectClick,
}: {
  onProjectClick: (d: IProject) => void;
}) {

  return (
    <div className="Sidebar">
      <DarkModeButton />
      <LabelList/>
      <ProjectList onProjectClick={onProjectClick}/>
    </div>
  );
}

export default Sidebar;
