import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserRenewals = () => {
  const [renewals, setRenewals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/renewals', { withCredentials: true })
      .then(res => setRenewals(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleRenew = (id) => {
    axios.post(`http://localhost:5000/api/renewals/request/${id}`, {}, { withCredentials: true })
      .then(() => alert('Renewal requested!'))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h3>Renewal Options</h3>
      <ul className="list-group">
        {renewals.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.insuranceName}</span>
            <button className="btn btn-success btn-sm" onClick={() => handleRenew(item._id)}>Request Renewal</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRenewals;
