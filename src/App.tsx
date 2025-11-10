import './App.css';
import Column from './components/Column';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { useState } from 'react';
import ViewLabel from './components/sidebar/label/ViewLabel';
import { ILabel } from './types/label';
import AddLabel from './components/sidebar/label/AddLabel';

function App() {
  const [showLabel, setShowLabel] = useState(false);
  const [dataToShow, setDataToShow] = useState<ILabel | null>(null);
  
  const [showAddLabel, setShowAddLabel] = useState(false);

  const openLabel = (data: ILabel) => {
    setDataToShow(data);
    setShowLabel(true);
    console.log(data.name)
  };

  const openAddLabel = () => setShowAddLabel(true);


  const handleAddLabel = (data: ILabel) => {
    console.log("New label:", data);

    // here you can push it to state, API, etc.
  };
  const closeLabel = () => {
    setShowLabel(false);
    setShowAddLabel(false);
  };

  return (
    <div className="App">
      <Header></Header>
      <Sidebar onLabelClick={openLabel} onAddLabelClick={openAddLabel}/>
      <Column></Column>
      {showLabel && dataToShow !== null && ( <ViewLabel closeBtn={closeLabel} data={dataToShow} />)}
      {showAddLabel && <AddLabel closeBtn={closeLabel} submitHandler={handleAddLabel} />}
    </div>
  );
}

export default App;
