import React, { useState, useEffect } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";

function BookQueue() {

  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setName(user.name);
  }, []);

  function generateToken() {

    if (!service) {
      alert("Select service");
      return;
    }

    axios.post("http://localhost:5000/api/queue/book", {
      name,
      service
    })
    .then(res => {

      setToken(res.data.token);
      setTime(res.data.time);

      localStorage.setItem("myService", service);
      localStorage.setItem("myToken", res.data.token);

    })
    .catch(() => alert("Booking failed"));

  }

  return (

    <div className="container">

      <h2>Book Queue</h2>

      {!token ? (

        <div className="form-container">

          <p><strong>Name:</strong> {name}</p>

          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="Hospital">Hospital</option>
            <option value="Bank">Bank</option>
            <option value="Salon">Salon</option>
          </select>

          <button onClick={generateToken}>Generate Token</button>

        </div>

      ) : (

        <div className="ticket">

          <h3>Queue Token Ticket</h3>

          <h1 className="token-number">{token}</h1>

          <p>Name: {name}</p>
          <p>Service: {service}</p>
          <p>Time: {time}</p>

          <QRCodeCanvas value={`${name}-${token}-${service}`} size={120} />

        </div>

      )}

    </div>

  );

}

export default BookQueue;