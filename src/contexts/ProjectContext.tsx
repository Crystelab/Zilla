import { createContext, useContext, ReactNode } from 'react';
import useProject from '../hooks/useProject';
import Project from '../components/center/Project';

const ProjectContext = createContext({} as any);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const { showProject, dataProject, openProject, refetchProject } = useProject();

  return (
    <ProjectContext.Provider value={{ openProject, refetchProject, showProject, dataProject }}>
      {children}
      {showProject && dataProject && <Project project={dataProject} />}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error('useProjectContext must be used within ProjectProvider');
  return context;
};