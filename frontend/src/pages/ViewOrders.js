import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching orders
    setOrders([
      { id: 1, product: 'Product 1', user: 'John Doe', status: 'Pending' },
      { id: 2, product: 'Product 2', user: 'Jane Doe', status: 'Shipped' }
    ]);
  }, []);

  return (
    <div>
      <h3>View Orders</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>User</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.product}</td>
              <td>{order.user}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewOrders;
