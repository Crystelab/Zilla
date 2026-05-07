import './App.css';
import Project from './components/center/Project';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { LabelProvider } from './contexts/LabelContext';
import { ProjectProvider } from './contexts/ProjectContext';
import useProject from './hooks/useProject';

function App() {
  const { showProject, dataProject, openProject } = useProject();
  
  return (
    <LabelProvider>
      <ProjectProvider>
        <div className="App">
          <Header/>
          <div className="main-container">
            <Sidebar onProjectClick={openProject} />
            {showProject && dataProject !== null && <Project data={dataProject} />}
          </div>
        </div>
      </ProjectProvider>
    </LabelProvider>
  );
}

export default App;
