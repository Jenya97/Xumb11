import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement,increment,reset} from './redux-toolkityy/CounterSlice'
function App() {
  const count=useSelector(state=>state.count.c)
  const dispatch=useDispatch()
  return (
    <>
      <div>
   {count}
   <button onClick={()=>dispatch(decrement())}>-</button>
   <button onClick={()=>dispatch(increment())}>+</button>
   <button onClick={()=>dispatch(reset())}>reset</button>
      </div>
    </>
  );
}

export default App;
