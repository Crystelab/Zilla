import { createContext, useContext, ReactNode } from 'react';
import useProject from '../hooks/useProject';
import Project from '../components/center/Project';
import AddProject from '../components/sidebar/project/AddProject';
import ProjectSettings from '../components/center/ProjectSettings';

const ProjectContext = createContext({} as any);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const { showProject, dataProject, openAddProject, openProject, showAddProject, closeProject, createProject, showProjectSettings, modifyProject, openProjectSettings, refetchProject } = useProject();

  return (
    <ProjectContext.Provider value={{ openProject, openAddProject, refetchProject, showProject, openProjectSettings, dataProject }}>
      {children}
      {showProject && dataProject && <Project project={dataProject} />}
      {showAddProject && <AddProject closeBtn={closeProject} newProject={createProject}/>}
      {showProjectSettings && dataProject && < ProjectSettings closeBtn={closeProject} modifyProject = {modifyProject} project = {dataProject}/>}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error('useProjectContext must be used within ProjectProvider');
  return context;
};