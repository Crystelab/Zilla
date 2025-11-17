import { useState, useEffect } from "react";
import { IProject } from "../../types/project";
import { IColumn } from "../../types/column";
import Column from "./Column";

type Props = {
  project: IProject;
};

function Columns(props: Props) {
  const { project } = props;

  const [columns, setColumns] = useState<IColumn[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/columns/project/${project.id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: IColumn[]) => {
        setColumns(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading columns...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="Columns">
      <ul>
        {columns.map((val) => (
          <li key={val.id}>
            <Column column={val}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Columns;