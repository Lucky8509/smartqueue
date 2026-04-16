import React, { useState } from "react";
import axios from "axios";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function register(e) {

    e.preventDefault();

    axios.post("http://localhost:5000/api/auth/register", {
      name: name,
      email: email,
      password: password
    })
    .then(res => {
      alert("Registration successful");
    })
    .catch(err => {
      console.log(err);
      alert("Registration failed");
    });

  }

  return (

    <div className="form-container">

      <h2>Register</h2>

      <form onSubmit={register}>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>

      </form>

    </div>

  );

}

export default Register;