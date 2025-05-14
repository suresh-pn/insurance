import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', role: '' });
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false); // Toggle form visibility

  const fetchUsers = async () => {
    const res = await axios.get('/api/admin/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async () => {
    if (editId) {
      // Update user
      await axios.put(`/api/admin/users/${editId}`, form);
      setEditId(null);
    } else {
      // Add new user
      await axios.post('/api/admin/users', form);
    }
    setForm({ name: '', email: '', role: '' });
    setShowForm(false); // Hide the form after submit
    fetchUsers();
  };

  const handleEdit = (user) => {
    setForm(user);
    setEditId(user._id);
    setShowForm(true); // Show form for editing
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await axios.delete(`/api/admin/users/${id}`);
      fetchUsers(); // Refresh the user list
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Users</h2>

      <button className="btn btn-primary mb-3" onClick={() => {
        setShowForm(!showForm);  // Toggle form visibility
        setForm({ name: '', email: '', role: '' });
        setEditId(null); // Reset form for new user
      }}>
        {showForm ? 'Hide Form' : 'Add User'}
      </button>

      {showForm && (
        <div className="mb-4 border p-3 rounded bg-light">
          <input
            className="form-control mb-2"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="form-control mb-2"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="form-control mb-2"
            placeholder="Role"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          />
          <button className="btn btn-success" onClick={handleSubmit}>
            {editId ? 'Update' : 'Add'} User
          </button>
        </div>
      )}

      <table className="table table-bordered">
        <thead>
          <tr><th>#</th><th>Name</th><th>Email</th><th>Role</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u._id}>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(u)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(u._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
