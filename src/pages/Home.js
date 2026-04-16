import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){

const [hospital,setHospital] = useState(0);
const [bank,setBank] = useState(0);
const [salon,setSalon] = useState(0);

useEffect(()=>{

setHospital((JSON.parse(localStorage.getItem("queue_Hospital"))||[]).length);
setBank((JSON.parse(localStorage.getItem("queue_Bank"))||[]).length);
setSalon((JSON.parse(localStorage.getItem("queue_Salon"))||[]).length);

},[]);

return(

<div className="home-container">

<div className="hero">

<h1>SmartQueue</h1>
<p>Skip the wait. Manage queues digitally.</p>

<div className="home-buttons">
<Link to="/login"><button>User Login</button></Link>
<Link to="/admin"><button>Admin Login</button></Link>
</div>

</div>

<div className="stats">

<div className="stat-card">
<h3>Hospital Queue</h3>
<h1>{hospital}</h1>
</div>

<div className="stat-card">
<h3>Bank Queue</h3>
<h1>{bank}</h1>
</div>

<div className="stat-card">
<h3>Salon Queue</h3>
<h1>{salon}</h1>
</div>

</div>

</div>

);

}

export default Home;