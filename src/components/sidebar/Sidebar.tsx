import DarkModeButton from "./DarkModeButton";
import { ILabel } from "../../types/label";
import { IProject } from "../../types/project";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

function Sidebar({
  onLabelClick,
  onAddLabelClick,
  onProjectClick,
  refetchSidebar
}: {
  onLabelClick: (d: ILabel) => void;
  onAddLabelClick: () => void;
  onProjectClick: (d: IProject) => void;
  refetchSidebar: boolean;
}) {
  const [labels, setLabels] = useState<ILabel[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/labels")
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

      fetch("http://localhost:8000/projects")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: IProject[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        setError(error);
        setLoading(false);
      });
  }, [refetchSidebar]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="Sidebar">
      <DarkModeButton />
      <h3>Labels</h3>
      <button onClick={() => onAddLabelClick()}>
        <FaPlus size={30}/>
      </button>
      
      <ul>
        {labels.map((val) => (
          <li
            key={val.id}
            className="row"
            onClick={() => onLabelClick(val)}
          >
            <div>{val.name}</div>
          </li>
        ))}
      </ul>

      <h3>Projects</h3>
      <ul>
        {projects.map((val) => (
          <li 
          key={val.id} 
          className="row"
          onClick={() => onProjectClick(val)}
          >
            <div>{val.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
