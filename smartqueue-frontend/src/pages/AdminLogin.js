import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin(){

const [user,setUser] = useState("");
const [pass,setPass] = useState("");

const navigate = useNavigate();

function login(e){

e.preventDefault();

if(user==="admin" && pass==="admin123"){

localStorage.setItem("loggedIn","true");
localStorage.setItem("role","admin");

navigate("/dashboard");

}else{

alert("Invalid admin login");

}

}

return(

<div className="form-container">

<h2>Admin Login</h2>

<form onSubmit={login}>

<input
placeholder="Admin Username"
value={user}
onChange={(e)=>setUser(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={pass}
onChange={(e)=>setPass(e.target.value)}
/>

<button>Login</button>

</form>

</div>

);

}

export default AdminLogin;