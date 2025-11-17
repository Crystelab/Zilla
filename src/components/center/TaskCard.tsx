import { ITask } from "../../types/task";

type Props = {
  data: ITask;
};


function TaskCard(props: Props) {
    const { data } = props;
    return (
      <div className="TaskCard">
        <h3>{data.name}</h3>
      </div>
    );
  }

  export default TaskCard;