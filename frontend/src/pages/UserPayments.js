import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserPayments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/payments', { withCredentials: true })
      .then(res => setPayments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>Payment Records</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Insurance</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((pay, index) => (
            <tr key={index}>
              <td>{pay.insurance}</td>
              <td>₹{pay.amount}</td>
              <td>{pay.status}</td>
              <td>{pay.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPayments;
