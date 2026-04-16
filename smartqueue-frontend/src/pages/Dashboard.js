import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [service, setService] = useState("Hospital");
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/queue/${service}`)
    .then(res => setQueue(res.data));
  }, [service]);

  function removeToken(id) {
    axios.delete(`http://localhost:5000/api/queue/${id}`)
    .then(() => {
      axios.get(`http://localhost:5000/api/queue/${service}`)
      .then(res => setQueue(res.data));
    });
  }

  return (

    <div className="container">

      <h2>Admin Dashboard</h2>

      <select value={service} onChange={(e)=>setService(e.target.value)}>
        <option>Hospital</option>
        <option>Bank</option>
        <option>Salon</option>
      </select>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Tokens</h3>
          <h1>{queue.length}</h1>
        </div>
      </div>

      {queue.map(q => (

        <div className="ticket" key={q._id}>

          <p>Token: {q.token}</p>
          <p>Name: {q.name}</p>
          <p>Time: {q.time}</p>

          <button onClick={() => removeToken(q._id)}>
            Remove
          </button>

        </div>

      ))}

    </div>

  );

}

export default Dashboard;