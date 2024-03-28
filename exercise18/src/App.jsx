import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [Users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    if (data.length > 0) {
      setUsers(data);
    }
  };
  // useEffect(() => {

  //   fetchUsers();
  // }, [])

  return (
    <>
      <div>
        <h1>Table</h1>
        <button onClick={fetchUsers}>Get Data</button>
        {Users.map((user) => {
          return (
            <div key={user.id}>
              <table className="tb">
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Body</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td>{user.body}</td>
                  </tr>
                </tbody>
              </table>
              <div></div>
              <div></div>
              <div></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
