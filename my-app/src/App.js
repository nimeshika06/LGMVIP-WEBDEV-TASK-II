import React, { useState } from "react";
import './index.css';
import { FaFacebook } from 'react-icons/fa';

function App() {
  const [users, setUsers] = useState();
  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?");
    const info = await response.json();
    setUsers(info.data);
  };
  return (
    <div>
      <nav className="navbar"><FaFacebook className="App-logo" />&nbsp;<a href="https://www.facebook.com/" >Facebook</a> &nbsp;&nbsp;</nav>
    <div className="App">
        <div className="one">
        <h1>USER DETAILS</h1>
        <button className="btn" onClick={loadUsers}>GET USERS</button>
        </div>
      <div className="two row">
        {users?.map((login, id) => {
          return (
            
              <div className="column">
            <div className="three" key={id}>
              <img src={login.avatar} className="image" alt="..." />
              <div className="four">
              
                <h2>
                  {login.first_name} {login.last_name}
                </h2>
                <h3>{login.email}</h3>
                
              </div>
            </div>
            </div>
      
          );
        })}
      </div>
      </div>
      </div>
  );
}

export default App;
