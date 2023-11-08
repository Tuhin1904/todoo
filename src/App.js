import './App.css';
import ShowToDo from './Components/ShowToDo';
import AddToDo from './Components/AddToDo';
// import { Provider } from 'react-redux';

function App() {
  return (
    <div className='App'>
      <h1 id='heading'>To Do App</h1>
      <AddToDo/>
      <ShowToDo />
    </div>
  );
}

export default App;
