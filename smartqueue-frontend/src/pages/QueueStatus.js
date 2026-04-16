import React, { useEffect, useState } from "react";
import axios from "axios";

function QueueStatus() {

  const [queue, setQueue] = useState([]);
  const [myToken, setMyToken] = useState(null);
  const [service, setService] = useState("");
  const [currentToken, setCurrentToken] = useState(1);

  useEffect(() => {

    const token = parseInt(localStorage.getItem("myToken"));
    const svc = localStorage.getItem("myService");

    if (token && svc) {

      setMyToken(token);
      setService(svc);

      axios.get(`http://localhost:5000/api/queue/${svc}`)
      .then(res => {

        const data = res.data;
        setQueue(data);

        if (data.length > 0) {
          setCurrentToken(data[0].token);
        }

      });

    }

  }, []);

  let peopleAhead = 0;

  if (queue.length > 0 && myToken) {
    const index = queue.findIndex(q => q.token === myToken);
    peopleAhead = index >= 0 ? index : 0;
  }

  return (

    <div className="container">

      <h2>Queue Status</h2>

      <div className="ticket">

        <p>Service: {service}</p>
        <p>Your Token: {myToken}</p>
        <p>Current Serving: {currentToken}</p>
        <p>People Ahead: {peopleAhead}</p>
        <p>Status: {peopleAhead === 0 ? "Your Turn" : "Waiting"}</p>

      </div>

    </div>

  );

}

export default QueueStatus;