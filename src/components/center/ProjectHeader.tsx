import { IProject } from "../../types/project";
import ProjectSettingsButton from "./ProjectSettingsButton";

type Props = {
  data: IProject;
};

function ProjectHeader(props: Props) {
  const { data } = props;
    return (
       <div className="ProjectHeader">
        <ProjectSettingsButton/>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
    );
  }

  export default ProjectHeader;