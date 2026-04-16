import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

function handleLogin(e){

e.preventDefault();

axios.post("http://localhost:5000/api/auth/login",{
email:email,
password:password
})
.then(res=>{

localStorage.setItem("token",res.data.token);
localStorage.setItem("user",JSON.stringify(res.data.user));
localStorage.setItem("loggedIn","true");
localStorage.setItem("role",res.data.user.role);

alert("Login Successful");

navigate("/book");

})
.catch(err=>{
alert("Invalid credentials");
});

}

return(

<div className="form-container">

<h2>User Login</h2>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Login</button>

</form>

</div>

);

}

export default Login;