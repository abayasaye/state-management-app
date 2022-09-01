import  useContext  from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./components/pages/Counter/Counter";
import counterProvider from "./components/contexts/counter-context";



function App() {
  return (
    <counterProvider>
      <div className="App">
        <Counter />
      </div>
    </counterProvider>
  );
}

export default App;
