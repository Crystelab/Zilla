import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import useProject from './hooks/useProject';
import Project from './components/center/Project';
import { LabelProvider } from './contexts/LabelContext';

function App() {
  const { showProject, dataProject, openProject } = useProject();

  return (
    <LabelProvider>
      <div className="App">
        <Header/>
        <div className="main-container">
          <Sidebar onProjectClick={openProject} />
          {showProject && dataProject !== null && <Project data={dataProject} />}
        </div>
      </div>
    </LabelProvider>
  );
}

export default App;
