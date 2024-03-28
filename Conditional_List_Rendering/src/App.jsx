import { useState } from "react";
import "./App.css";

function App() {
  const [showbtn, setshowbtn] = useState(false);
  const [todos,setTodos]=useState([
    {
      id:101,
      title:"ABC",
      desc:"I am todo 1"
    },
    {
      id:102,
      title:"PQR",
      desc:"I am todo 2"
    },
    {
      id:103,
      title:"XYZ",
      desc:"I am todo 3"
    }
  ])

  return (
    <>
      <div>
        <div>
          {showbtn ? (<button>showbtn is TRUE</button>):(<button>showbtn is FALSE</button>)}
        </div>
        <br />

        <div>{showbtn && <button>button is true</button>}</div>
        <button onClick={() => setshowbtn(!showbtn)}>Change</button>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        {todos.map(todo=>{
          return <div key={todo.id}>
            <div>{todo.id}</div>
            <div>{todo.title}</div>
            <div>{todo.desc}</div>
          </div>
        })}
      </div>

    </>
  );
}

export default App;
