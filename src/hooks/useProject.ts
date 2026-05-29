import { useState } from "react";
import { IProject } from "../types/project";

const useProject = (): {
    showProject: boolean;
    dataProject: IProject | null;
    showAddProject: boolean;
    openProject: (data: IProject) => void;
    closeProject: () => void;
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

    const closeProject = () => {
    setShowProject(false);
    setShowAddProject(false);
    };

    return {showProject, dataProject,showAddProject, openProject, closeProject, refetchProject}
}

export default useProject;