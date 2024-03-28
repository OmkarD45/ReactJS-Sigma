import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const isEven=useMemo(()=>{
    let i=0;
    while(i<200000000) {
      i++;
    }
    return countOne%2===0;
  },[countOne])
  return (
    <>
      <button onClick={() => setCountOne((countOne) => countOne + 1)}>CountOne {countOne}</button>
      <span>{isEven?"Even":"Odd"}</span> 
      <button onClick={() => setCountTwo ((countTwo) => countTwo + 1) }>CountTwo {countTwo}</button>
    </>
  );
}

export default App;
