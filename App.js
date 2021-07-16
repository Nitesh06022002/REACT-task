import './App.css';
import NotImportant from './NotImportant';
import Urgent from './Urgent';

function App() {
  const title = "Eisen Hower Matrix"
  const SubTitle = "TASKS"
  return (
    <div className="App">
      <div className="Content">
        <h1>{ title }</h1>
        <h2>{ SubTitle }</h2>
        
      </div>
      <Urgent></Urgent>
      <NotUrgent></NotUrgent>
      <Important></Important>
      <NotImportant></NotImportant>
    </div>
  );
}

export default App;
