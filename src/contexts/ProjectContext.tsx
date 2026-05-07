import { createContext, useContext, ReactNode } from 'react';
import useProject from '../hooks/useProject';
import Project from '../components/center/Project';

const ProjectContext = createContext({} as any);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
  const { showProject, dataProject, openProject, closeProject } = useProject();

  return (
    <ProjectContext.Provider value={{ openProject }}>
      {children}
      {showProject && dataProject && <Project data={dataProject} />}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error('useProjectContext must be used within ProjectProvider');
  return context;
};