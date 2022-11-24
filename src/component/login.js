import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  return (
    <div className="parent">
      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter Your Username!"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input type="password" placeholder="Enter Your Password!" />
        <br />
        <button
          className="btn"
          onClick={() => {
            navigate(`/skills/${username}`);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
export default Login;
