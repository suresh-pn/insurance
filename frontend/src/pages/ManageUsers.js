import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import Axios from 'axios';  // Import Axios

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Make an API call to fetch users
    Axios.get('http://localhost:5000/api/users')  // Replace this with your actual backend API endpoint
      .then((response) => {
        setUsers(response.data);  // Assuming the response contains the users array
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch users');
        setLoading(false);
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    // Call API to delete user
    Axios.delete(`http://localhost:5000/api/users/${id}`)  // Replace with your backend API endpoint
      .then(() => {
        setUsers(users.filter(user => user.id !== id));  // Remove deleted user from the state
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h3>Manage Users</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageUsers;
