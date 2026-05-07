import DarkModeButton from "./DarkModeButton";
import { IProject } from "../../types/project";
import { useEffect, useState } from "react";
import { LabelList } from "./label/LabelList";

function Sidebar({
  onProjectClick,
}: {
  onProjectClick: (d: IProject) => void;
}) {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch("http://localhost:8000/projects")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data: IProject[]) => { setProjects(data); setLoading(false); })
      .catch((error: Error) => { setError(error); setLoading(false); });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="Sidebar">
      <DarkModeButton />
      <LabelList/>
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
