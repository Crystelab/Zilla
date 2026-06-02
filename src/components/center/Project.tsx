import { IProject } from "../../types/project";
import Columns from "./Columns";
import ProjectHeader from "./ProjectHeader";

type Props = {
  project: IProject;
};

function Project(props: Props) {
  const {project} = props;
    return (
       <div className="Project">
        <ProjectHeader project={project}/>
        <Columns project={project}></Columns>
      </div>
    );
  }

  export default Project;