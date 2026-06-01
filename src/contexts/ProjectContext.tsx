import { createContext, useContext, ReactNode } from 'react';
import useProject from '../hooks/useProject';
import Project from '../components/center/Project';
import AddProject from '../components/sidebar/project/AddProject';

const ProjectContext = createContext({} as any);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const { showProject, dataProject, openAddProject, openProject, showAddProject, closeProject, createProject, refetchProject } = useProject();

  return (
    <ProjectContext.Provider value={{ openProject, openAddProject, refetchProject, showProject, dataProject }}>
      {children}
      {showProject && dataProject && <Project project={dataProject} />}
      {showAddProject && <AddProject closeBtn={closeProject} newProject={createProject}/>}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error('useProjectContext must be used within ProjectProvider');
  return context;
};