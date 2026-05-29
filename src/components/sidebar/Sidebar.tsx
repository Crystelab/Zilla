import { IProject } from "../../types/project";
import DarkModeButton from "./DarkModeButton";
import { LabelList } from "./label/LabelList";
import { ProjectList } from "./project/ProjectList";

function Sidebar() {

  return (
    <div className="Sidebar">
      <DarkModeButton />
      <LabelList/>
      <ProjectList/>
    </div>
  );
}

export default Sidebar;
