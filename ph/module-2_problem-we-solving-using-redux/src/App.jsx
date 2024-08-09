import { createContext, useState } from "react";
import "./App.css";
import Parent from "./components/Parent";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = { count, setCount };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <Parent />
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
