import "./Counter.css";
import { useReducer } from "react";
import { useContext } from "react";
import { reducer } from "../../../store/reducers/counter-reducer";
import { upAction,downAction,resetAction,randomAction,updateAction,mathAction} from "../../../store/actions/counter-actions";

export let inatliesState = 0;
const  Counter=()=> {
const [firstSatate,dispatch]=useReducer(reducer , inatliesState);

  return (
    <div className="counter">
          <h1>COUNTER</h1>
      <h1>{firstSatate}</h1>
      <button onClick={()=> dispatch(upAction())}> countUp </button>
      <button onClick={()=>dispatch(downAction())}>countDown</button>
      <button onClick={()=>dispatch(resetAction())}>countReset</button>
      <button onClick={()=>dispatch(randomAction(Math.floor(Math.random()*100)+1))}>countRandom</button>
      <button onClick={()=>dispatch(updateAction(100))}>countUpdate</button>
      <button onClick={()=>dispatch(mathAction(
        MATH_SIGN.map(mathItem=>
          mathItem
          )
      ))}>actionMath</button>
    </div>
  );
};

export default Counter;
