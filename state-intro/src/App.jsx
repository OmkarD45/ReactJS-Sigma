import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)
  useEffect(() => {
    alert("Welcome to my Page")   
  }, [])

  useEffect(() => {
    alert("Count value is changed")
    setColor(color+1)
  }, [count])
  
  

  return (
    <>
      <Navbar color={"black "+ color}/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
