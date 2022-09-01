import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Reducer } from "react";
import "./App.css";
import { useReducer } from "react";
import { upAction ,downAction,resetAction,randomAction,updateAction } from "./components/store/actions/counter-actions";
import { reducer } from "./components/store/reducers/counter-reducer";
export let inatliesState = 0;

const MATH_SIGN =["+","-","*","/"]

function App() {
  const [firstSatate,dispatch]=useReducer(reducer , inatliesState);

  return(
  <div className="App">
    <h1>COUNTER</h1>
      <h1>{firstSatate}</h1>
      <button onClick={()=>dispatch(upAction())}>countUp</button>
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
  )
}

export default App;
