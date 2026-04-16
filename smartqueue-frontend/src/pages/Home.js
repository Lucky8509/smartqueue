import React from "react";
import { Link } from "react-router-dom";

function Home(){

return(

<div className="home-container">

<div className="hero">

<h1>SmartQueue</h1>

<p>Digital Queue Management System to avoid waiting in long lines.</p>

<div className="home-buttons">

<Link to="/login">
<button>User Login</button>
</Link>

<Link to="/register">
<button>Register</button>
</Link>

<Link to="/admin">
<button>Admin Login</button>
</Link>

</div>

</div>


<div className="services">

<h2>Our Services</h2>

<div className="service-grid">

<div className="service-card">

<h3>Hospital Queue</h3>

<p>Book hospital appointment tokens easily and track waiting time.</p>

</div>

<div className="service-card">

<h3>Bank Queue</h3>

<p>Generate bank service tokens without standing in line.</p>

</div>

<div className="service-card">

<h3>Salon Queue</h3>

<p>Reserve your salon slot and skip the waiting queue.</p>

</div>

</div>

</div>

</div>

);

}

export default Home;