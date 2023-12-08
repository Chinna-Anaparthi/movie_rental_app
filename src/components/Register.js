import { useState } from "react";
import "./Register.css";
import axios from "axios";

function Register() {
  const roles = ["User", "Admin"];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setrePassword] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  var [usernameError, setUsernameError] = useState("");
  var checkUSerData = () => {
    if (username === "") {
      setUsernameError("Username cannot be empty");
      return false;
    }

    if (password === "") return false;
    if (role === "Select Role") return false;
    return true;
  };

  const signUp = (event) => {
    event.preventDefault();
    var checkData = checkUSerData();
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
        var username = username.data.username;
        localStorage.setItem("username", username);
        localStorage.setItem("token", token);
        console.log(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="registerForm">
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

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
    </form>
  );
}

export default Register;
