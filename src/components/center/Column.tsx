import { useEffect, useState } from "react";
import { IColumn } from "../../types/column";
import { ITask } from "../../types/task";
import TaskCard from "./TaskCard";

type Props = {
  column: IColumn;
};


function Column(props: Props) {
    const { column,} = props;

    const [tasks, setTaks] = useState<ITask[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(`http://localhost:8000/tasks/column/${column.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data: ITask[]) => {
          setTaks(data);
          setLoading(false);
        })
        .catch((error: Error) => {
          setError(error);
          setLoading(false);
        });
    }, []);

  
    return (
      <div className="Column">
        <h2>{column.name}</h2>
          <ul>
            {tasks.map((val) => (
            <li key={val.id}>
              <TaskCard task={val}/>
            </li>
            ))}
          </ul>
      </div>
    );
  }

  export default Column;
