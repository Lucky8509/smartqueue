import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar(){

const navigate = useNavigate();

const loggedIn = localStorage.getItem("loggedIn");
const role = localStorage.getItem("role");

function logout(){

localStorage.clear();
navigate("/");
window.location.reload();

}

return(

<nav className="navbar">

<h2 className="logo">SmartQueue</h2>

<div className="nav-links">

<Link to="/">Home</Link>

{!loggedIn && <Link to="/login">User</Link>}
{!loggedIn && <Link to="/admin">Admin</Link>}

{loggedIn && role==="user" && <Link to="/book">Book</Link>}
{loggedIn && role==="user" && <Link to="/status">Status</Link>}
{loggedIn && role==="user" && <Link to="/history">History</Link>}

{loggedIn && role==="admin" && <Link to="/dashboard">Dashboard</Link>}
{loggedIn && role==="admin" && <Link to="/board">Board</Link>}

{loggedIn && <button onClick={logout} className="logout-btn">Logout</button>}

</div>

</nav>

);

}

export default Navbar;