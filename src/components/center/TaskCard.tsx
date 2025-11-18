import { useEffect, useState } from "react";
import { ITask } from "../../types/task";
import { ILabel } from "../../types/label";

type Props = {
  task: ITask;
};


function TaskCard(props: Props) {
    const { task } = props;

    const [labels, setLabels] = useState<ILabel[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`http://localhost:8000/tasklabels/${task.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data: ILabel[]) => {
          setLabels(data);
          setLoading(false);
        })
        .catch((error: Error) => {
          setError(error);
          setLoading(false);
        });
    }, []);

    return (
      <div className="TaskCard">
        <h3>{task.name}</h3>
        <ul>
          {labels.map((val) => (
            <li key={val.id}>
              <h4>{val.name}</h4>
            </li>
            ))}
        </ul>
      </div>
    );
  }

  export default TaskCard;