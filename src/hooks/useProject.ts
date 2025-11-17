import { useState } from "react";
import { IProject } from "../types/project";

const useProject = (): {
    showProject: boolean;
    dataProject: IProject | null;
    showAddProject: boolean;
    openProject: (data: IProject) => void;
    closeProject: () => void;
} => {

    const [showProject, setShowProject] = useState(false);
    const [dataProject, setdataProject] = useState<IProject | null>(null);
    const [showAddProject, setShowAddProject] = useState(false);

    const openProject = (data: IProject) => {
    setdataProject(data);
    setShowProject(true);
    console.log(data.name)
    };

    const openAddProject = () => setShowAddProject(true);


    const handleAddProject = (data: IProject) => {
    console.log("New project:", data);

    // here you can push it to state, API, etc.
    };
    const closeProject = () => {
    setShowProject(false);
    setShowAddProject(false);
    };

    return {showProject, dataProject,showAddProject, openProject, closeProject}
}

export default useProject;