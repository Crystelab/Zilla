import './App.css';
import Column from './components/Column';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { useState } from 'react';
import LabelModal from './components/sidebar/LabelModal';
import { ILabel } from './types/label';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState<ILabel | null>(null);

  const openModal = (data: ILabel) => {
    setDataToShow(data);
    setShowModal(true);
    console.log(data.name)
  };
  const closeModal = () => setShowModal(false);

  return (
    <div className="App">
      <Header></Header>
      <Sidebar onLabelClick={openModal} />
      <Column></Column>
      {showModal && dataToShow !== null && ( <LabelModal closeBtn={closeModal} data={dataToShow} />)}
    </div>
  );
}

export default App;
