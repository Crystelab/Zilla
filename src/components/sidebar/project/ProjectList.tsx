import { useEffect, useState } from "react";
import { IProject } from "../../../types/project";
import { useProjectContext } from "../../../contexts/ProjectContext";
import { FaPlus } from "react-icons/fa";

export const ProjectList = () => {
    const { openProject, openAddProject, refetchProject } = useProjectContext();
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        fetch("http://localhost:8000/projects")
        .then(res => res.json())
        .then(setProjects);
    }, [refetchProject]);

    return(
        <div className="Sidebar">
            <h3>Projects</h3>
            <button onClick={() => openAddProject()}>
                <FaPlus size={30}/>
            </button>
            <ul>
                {projects.map((val) => (
                <li 
                key={val.id} 
                className="row"
                onClick={() => openProject(val)}
                >
                    <div>{val.name}</div>
                </li>
                ))}
            </ul>
      </div>
    )
}



