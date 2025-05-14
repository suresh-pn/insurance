import React, { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/history', { withCredentials: true })
      .then(res => setHistory(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>Insurance & Payment History</h3>
      <ul className="list-group">
        {history.map((item, index) => (
          <li key={index} className="list-group-item">
            <strong>{item.type}:</strong> {item.detail} <br />
            <strong>Date:</strong> {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
