import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'

function Login() {
  const [formData, setFormData] = useState({ userid: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No registered user found. Please register first.");
      return;
    }

    if (
      storedUser.userid === formData.userid &&
      storedUser.password === formData.password
    ) {
      
      navigate("/");
      window.location.reload(); 
    } else {
      alert("Invalid credentials. Please try again.");
    }
    
  };

  return (
    <div className="loginform">
        <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userid"
          placeholder="Username"
          value={formData.userid}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
