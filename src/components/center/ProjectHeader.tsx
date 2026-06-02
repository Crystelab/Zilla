import { IProject } from "../../types/project";
import ProjectSettingsButton from "./ProjectSettingsButton";

type Props = {
  project: IProject;
};

function ProjectHeader(props: Props) {
  const { project } = props;
    return (
       <div className="ProjectHeader">
        <h1>{project.name}</h1>
        <ProjectSettingsButton project = {project}/>
      </div>
    );
  }

  export default ProjectHeader;