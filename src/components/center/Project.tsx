import { IProject } from "../../types/project";
import Columns from "./Columns";
import ProjectHeader from "./ProjectHeader";

type Props = {
  data: IProject;
};

function Project(props: Props) {
  const { data } = props;
    return (
       <div className="Project">
        <ProjectHeader data={data}/>
        <Columns project={data}></Columns>
      </div>
    );
  }

  export default Project;