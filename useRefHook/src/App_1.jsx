import { useState,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let a=0;
  const b = useRef(0)
  useEffect(() => {
    a=a+1
    b.current=b.current+1
    console.log(`Rendering.... a=${a} & b=${b.current}`);
  })
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
    </>
  )
}

export default App
