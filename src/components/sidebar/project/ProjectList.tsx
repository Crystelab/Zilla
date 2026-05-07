import { useEffect, useState } from "react";
import { IProject } from "../../../types/project";
import { useProjectContext } from "../../../contexts/ProjectContext";

export const ProjectList = ({ onProjectClick }: { onProjectClick: (project: IProject) => void }) => {
    const { openProject } = useProjectContext();
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        fetch("http://localhost:8000/projects")
        .then(res => res.json())
        .then(setProjects);
    }, []);

    return(
        <div className="Sidebar">
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
    )
}



