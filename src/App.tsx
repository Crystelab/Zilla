import './App.css';
import Project from './components/center/Project';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { LabelProvider } from './contexts/LabelContext';
import { ProjectProvider, useProjectContext } from './contexts/ProjectContext';

function AppInner() {
  const { showProject, dataProject } = useProjectContext();
  return (
    <div className="App">
      <Header/>
      <div className="main-container">
        <Sidebar/>
        {showProject && dataProject !== null && <Project project={dataProject} />}
      </div>
    </div>
  );
}

function App() {
  return (
    <LabelProvider>
      <ProjectProvider>
        <AppInner />
      </ProjectProvider>
    </LabelProvider>
  );
}

export default App;
