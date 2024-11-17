import React, { useState } from "react";
import "./CSS/LoginSignUp.css";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginSignUp = () => {
  const [input, setInput] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const validateInputs = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!input.userid) errors.userid = "User ID is required!";
    if (!input.email) errors.email = "Email is required!";
    if (input.email && !emailRegex.test(input.email))
      errors.email = "Invalid email format!";
    if (!input.password || input.password.length < 6)
      errors.password = "Password must be at least 6 characters!";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateInputs();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setLoading(true);

    const url = "http://localhost:3000/customer";
    axios
      .post(url, input)
      .then((res) => {
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(input));
      alert("You are Successfully Registered!!!");
        setInput({}); // Clear form inputs
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        alert("Registration Failed!");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="loginsignup">
          <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
              <input
                type="text"
                name="userid"
                value={input.userid || ""}
                onChange={handleInput}
                placeholder="UserId"
              />
              {fieldErrors.userid && <p style={{ color: "red" }}>{fieldErrors.userid}</p>}

              <input
                type="email"
                name="email"
                value={input.email || ""}
                onChange={handleInput}
                placeholder="Email Address"
              />
              {fieldErrors.email && <p style={{ color: "red" }}>{fieldErrors.email}</p>}

              <input
                type="password"
                name="password"
                value={input.password || ""}
                onChange={handleInput}
                placeholder="Password"
              />
              {fieldErrors.password && (
                <p style={{ color: "red" }}>{fieldErrors.password}</p>
              )}
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
            <p className="loginsignup-login">
              Already have an account?
              <span>
                <Link to="/loginpage"> Login Here</Link>
              </span>
            </p>
            <div className="loginsignup-agree">
              <input type="checkbox" name="" id="" />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginSignUp;
