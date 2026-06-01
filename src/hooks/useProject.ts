import { useState } from "react";
import { IProject } from "../types/project";

const useProject = (): {
    showProject: boolean;
    dataProject: IProject | null;
    showAddProject: boolean;
    openProject: (data: IProject) => void;
    closeProject: () => void;
    createProject : any;
    openAddProject: () => void;
    refetchProject: boolean;
} => {

    const [showProject, setShowProject] = useState(false);
    const [dataProject, setdataProject] = useState<IProject | null>(null);
    const [showAddProject, setShowAddProject] = useState(false);
    const [refetchProject, setrefetchProject] = useState(false);

    const openProject = (data: IProject) => {
    setdataProject(data);
    setShowProject(true);
    setrefetchProject(prev => !prev);
    };

    const openAddProject = () => setShowAddProject(true);

    const createProject = async (name: string, description: string) => {
        const response = await fetch(
            `http://localhost:8000/projects?name=${name}&description=${description}`,
            { method: "POST" }
        );
        setrefetchProject(prev => !prev);
        closeProject();
    };

    const closeProject = () => {
    setShowProject(false);
    setShowAddProject(false);
    };

    return {showProject, dataProject,showAddProject, openProject, closeProject, openAddProject, createProject, refetchProject}
}

export default useProject;