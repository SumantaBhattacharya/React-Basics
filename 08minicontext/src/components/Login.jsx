import React, { useState, useContext } from "react";
import userContext from "../context/UserContext"; // create context

// rfce react function components
export default function Login() {

  const [ isUsername, setUsername ] = useState("");
  const [ isPassword, setPassword ] = useState("");

  const {setUser} = useContext(userContext);

  const handleSubmit = (e)=>{
    e.preventDefault();

    // clear form fields after login
    // setUsername("");
    // setPassword("");

    setUser({isUsername, isPassword})

  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              value={isUsername}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="text"
              placeholder="Username"
              className="username"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
            value={isPassword}
            onChange={(e)=>{
                // update password state here
                setPassword(e.target.value);
            }}
            type="password" 
            placeholder=" Password"
            className="password" required />
          </div>
          <button 
          onClick={handleSubmit}
          type="submit" 
          className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
