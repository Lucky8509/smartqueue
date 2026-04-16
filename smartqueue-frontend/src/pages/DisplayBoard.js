import React, { useEffect, useState } from "react";
import axios from "axios";

function DisplayBoard() {

  const [service, setService] = useState("Hospital");
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    loadCurrent();
  }, [service]);

  function loadCurrent() {
    axios.get(`http://localhost:5000/api/queue/${service}`)
    .then(res => {
      if (res.data.length > 0) {
        setCurrent(res.data[0]);
      } else {
        setCurrent(null);
      }
    });
  }

  function nextToken() {

    if (!current) return;

    axios.delete(`http://localhost:5000/api/queue/${current._id}`)
    .then(() => loadCurrent());

  }

  return (

    <div className="container">

      <h2>Display Board</h2>

      <select value={service} onChange={(e)=>setService(e.target.value)}>
        <option>Hospital</option>
        <option>Bank</option>
        <option>Salon</option>
      </select>

      <div className="ticket">

        <h1 className="token-number">
          {current ? current.token : "-"}
        </h1>

        <p>Now Serving</p>

      </div>

      <button onClick={nextToken}>Next Token</button>

    </div>

  );

}

export default DisplayBoard;