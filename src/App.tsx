import './App.css';
import Column from'./components/Column'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <Column></Column>
    </div>
  );
}

export default App;
