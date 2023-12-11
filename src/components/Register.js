import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Register.css";

function Register() {
  const roles = ["User", "Admin"];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setrePassword] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  var [usernameError, setUsernameError] = useState("");
  var checkUserData = () => {
    if (username === "") {
      setUsernameError("Username cannot be empty");
      return false;
    }

    if (password === "") return false;
    if (role === "") return false;
    return true;
  };

  const signUp = (event) => {
    event.preventDefault();
    var checkData = checkUserData();
    if (checkData === false) {
      alert("Please check your data");
      return;
    }

    axios
      .post("http://localhost:5042/api/User", {
        username: username,
        role: role,
        password: password,
        email: email,
        phone: phone,
      })
      .then((userData) => {
        var token = userData.data.token;
        var username = userData.data.username; // Fixed the incorrect reference
        localStorage.setItem("username", username);
        localStorage.setItem("token", token);
        console.log(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="image">
      <form className="registerForm">
      <h1 className="heading">Register</h1>

        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        {usernameError && <div className="error-message">{usernameError}</div>}

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input
          type="text"
          className="form-control"
          placeholder="Re-Type Password"
          value={repassword}
          onChange={(e) => {
            setrePassword(e.target.value);
          }}
        />

        <select
          className="form-select"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <option value="" disabled>
            Select Role
          </option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

        <input
          type="text"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <button className="btn btn-primary button" onClick={signUp}>
          Sign Up
        </button>

        <button className="btn btn-danger button">Cancel</button>

        <p className="navigate">
          Already have login credentials?{" "}
          <Link to="/login">Login here</Link>.
        </p>
      </form>
    </div>
  );
}

export default Register;
