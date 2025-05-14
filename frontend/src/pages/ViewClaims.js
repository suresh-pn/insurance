import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ViewClaims = () => {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    // Simulate fetching claims
    setClaims([
      { id: 1, user: 'John Doe', product: 'Product 1', status: 'Pending' },
      { id: 2, user: 'Jane Doe', product: 'Product 2', status: 'Resolved' }
    ]);
  }, []);

  return (
    <div>
      <h3>View Claims</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Product</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {claims.map(claim => (
            <tr key={claim.id}>
              <td>{claim.user}</td>
              <td>{claim.product}</td>
              <td>{claim.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewClaims;
