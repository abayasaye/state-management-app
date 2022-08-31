import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Reducer } from "react";
import "./App.css";
import { useReducer } from "react";
import { UP_ACTION,DOWN_ACTION,RESET_ACTION,RANDOM_ACTION } from "./components/store/actions/counter-actions";
import { reducer } from "./components/store/reducers/counter-reducer";
export let inatliesState = 0;



function App() {
  const [firstSatate,dispatch]=useReducer(reducer , inatliesState);

  return(
  <div className="App">
      <h1>{firstSatate}</h1>
      <button onClick={()=>dispatch(UP_ACTION)}>countUp</button>
      <button onClick={()=>dispatch(DOWN_ACTION)}>countDown</button>
      <button onClick={()=>dispatch(RESET_ACTION)}>countReset</button>
      <button onClick={()=>dispatch(RANDOM_ACTION)}>countRandom</button>
  </div>
  )
}

export default App;
