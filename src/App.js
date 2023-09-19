import logo from './logo.svg';
import './App.css';
// import {useSelector} from "./redux/hooks"
// import { useDispatch } from './redux/hooks/index';
import {increament , decreament} from "./redux/slices/counter";
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const count = useSelector(state =>state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Count is {count}</h1>
        <button onClick={()=>dispatch(increament())}>Increament</button>
        <button onClick={()=>dispatch(decreament())}>Decreament</button>
      </header>
    </div>
  );
}

export default App;
