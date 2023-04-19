import React, { useState } from 'react'
import "../Componant/CSS/Login.css"
import { useNavigate } from "react-router-dom";
import Navbar from './Dashbord/Pages/Navbar';
import Main from "./CSS/main.png"

function Login() {
  const Navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Request Sent");
    fetch('http://localhost:3002/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.msg._id);
        alert(data.msg._id)
        alert("Login Success" + data.token)
        window.localStorage.setItem("token", `${data.token}`)
        Navigation(`/dashbord/${data.msg._id}`)
   
      })
      .catch(error =>
        alert(error));

  };

  return (
    <>

      <Navbar />
      <div className="login-container">
        <div className="mainlogin">
          <div className="l">
            <form onSubmit={handleSubmit} className="login-form">
              <h2>Login</h2>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <input type="submit" onClick={handleSubmit} />
              <p><a href="http://localhost:3000/signup">Create new User</a></p>
            </form>
          </div>
          <div className="r">
            <img src={Main} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
