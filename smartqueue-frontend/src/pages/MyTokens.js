import React, { useEffect, useState } from "react";
import axios from "axios";

function MyTokens() {

  const [tokens, setTokens] = useState([]);

  useEffect(() => {

    const service = localStorage.getItem("myService");
    const user = JSON.parse(localStorage.getItem("user"));

    if (service && user) {

      axios.get(`http://localhost:5000/api/queue/${service}`)
      .then(res => {

        const my = res.data.filter(q => q.name === user.name);
        setTokens(my);

      });

    }

  }, []);

  function cancelToken(id) {

    axios.delete(`http://localhost:5000/api/queue/${id}`)
    .then(() => {
      setTokens(tokens.filter(t => t._id !== id));
    });

  }

  return (

    <div className="container">

      <h2>My Tokens</h2>

      {tokens.map(t => (

        <div className="ticket" key={t._id}>

          <p>Token: {t.token}</p>
          <p>Service: {t.service}</p>
          <p>Time: {t.time}</p>

          <button onClick={() => cancelToken(t._id)}>Cancel</button>

        </div>

      ))}

    </div>

  );

}

export default MyTokens;