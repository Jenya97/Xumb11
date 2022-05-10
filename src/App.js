import "./App.css";
// import CounterOne from "./CounterOne";
// import CounterTwo from "./CounterTwo";
// import Counter from "./Counter";
import {useSelector, useDispatch} from 'react-redux';
import {asyncDecrementCreate,asyncIncrementCreate} from './redux/Counter/Counter'
import {fetchUsers} from './redux/Users/UsersReducer';

function App() {
 const count=useSelector(state=>state.countReducer.count);
 const users=useSelector(state=>state.userReducer.users);
 
 const dispatch=useDispatch()
  return (
    <>
   {/* <Counter render={(counter,increment)=>(
     <CounterOne counter={counter} increment={increment}/>
   )}/>
     <Counter render={(counter,increment)=>(
     <CounterTwo counter={counter} increment={increment}/>
   )}/> */}
   {count}
   <button onClick={()=>dispatch(asyncDecrementCreate())}>-</button>
   <button onClick={()=>dispatch(asyncIncrementCreate())}>+</button>
   <button onClick={()=>dispatch(fetchUsers())}>click</button>
   {users.length>0 &&  users.map(i=>(
     <div key={i.id}>{i.name}</div>
   ))}
    </>
  );
}

export default App;
