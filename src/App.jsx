import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Reducer } from "react";
import "./App.css";
import { useReducer } from "react";
export const up_ACTION = {type:"UP"}
export let inatliesState = 0;

export const reducer = (state, action) => {
  switch (action.type) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    case "RESET":
      return state = 0 ;

    default:
      return state;
  }
};

function App() {
  const [firstSatate,dispatch]=useReducer(reducer , inatliesState);

  return(
  <div className="App">
      <h1>{firstSatate}</h1>
      <button onClick={()=>dispatch({type:"UP"})}>countUp</button>
      <button onClick={()=>dispatch({type:"DOWN"})}>countDown</button>
      <button onClick={()=>dispatch({type:"RESET"})}>countReset</button>
  </div>
  )
}

export default App;
