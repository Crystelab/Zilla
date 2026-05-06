import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { useState } from 'react';
import ViewLabel from './components/sidebar/label/ViewLabel';
import { ILabel } from './types/label';
import AddLabel from './components/sidebar/label/AddLabel';
import useLabels from './hooks/useLabels';
import useProject from './hooks/useProject';
import Project from './components/center/Project';

function App() {

  const { showLabel, dataLabel, showAddLabel, openLabel, closeLabel, createLabel, openAddLabel, refetchLabels } = useLabels();
  const { showProject, dataProject, showAddProject, openProject, closeProject } = useProject();

  return (
    <div className="App">
      <Header></Header>
      <div className="main-container">
        <Sidebar onLabelClick={openLabel} onAddLabelClick={openAddLabel} onProjectClick={openProject} refetchLabels={refetchLabels}/>
        {showProject && dataProject !== null && ( <Project data={dataProject}></Project>)}
      </div>
      {showLabel && dataLabel !== null && ( <ViewLabel closeBtn={closeLabel} data={dataLabel} />)}
      {showAddLabel && <AddLabel closeBtn={closeLabel} newLabel={createLabel} />}
    </div>
  );
}

export default App;
