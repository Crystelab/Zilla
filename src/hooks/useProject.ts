import { useState } from "react";
import { IProject } from "../types/project";

const useProject = (): {
    showProject: boolean;
    dataProject: IProject | null;
    showAddProject: boolean;
    openProject: (data: IProject) => void;
    closeProject: () => void;
    createProject : any;
    modifyProject: (data: IProject) => void;
    openAddProject: () => void;
    showProjectSettings: boolean;
    openProjectSettings: (data: IProject) => void;
    refetchProject: boolean;
} => {

    const [showProject, setShowProject] = useState(false);
    const [dataProject, setdataProject] = useState<IProject | null>(null);
    const [showAddProject, setShowAddProject] = useState(false);
    const [showProjectSettings, setShowProjectSettings] = useState(false);
    const [refetchProject, setrefetchProject] = useState(false);

    const openProject = (data: IProject) => {
    setdataProject(data);
    setShowProject(true);
    setrefetchProject(prev => !prev);
    };

    const openAddProject = () => setShowAddProject(true);
    const openProjectSettings = () => setShowProjectSettings(true);

    const createProject = async (name: string, description: string) => {
        const response = await fetch(
            `http://localhost:8000/projects?name=${name}&description=${description}`,
            { method: "POST" }
        );
        setrefetchProject(prev => !prev);
        closeProject();
    };

    const modifyProject = async (data: IProject) => {
        const response = await fetch(
            `http://localhost:8000/projects/${data.id}`,
            { 
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: data.id, name: data.name, description: data.description })
            }
        );
        setrefetchProject(prev => !prev);
        closeProject();
    };

    const closeProject = () => {
    setShowProject(false);
    setShowAddProject(false);
    setShowProjectSettings(false);
    };

    return {showProject, dataProject,showAddProject, openProject, closeProject, openAddProject, openProjectSettings, showProjectSettings, createProject, modifyProject, refetchProject}
}

export default useProject;