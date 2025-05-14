import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPolicies = () => {
  const [policies, setPolicies] = useState([]);
  const [form, setForm] = useState({ name: '', description: '', price: '', duration: '' });
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchPolicies = async () => {
    const res = await axios.get('/api/admin/policies');
    setPolicies(res.data);
  };

  useEffect(() => {
    fetchPolicies();
  }, []);

  const handleSubmit = async () => {
    if (editId) {
      // Update policy
      await axios.put(`/api/admin/policies/${editId}`, form);
      setEditId(null);
    } else {
      // Add new policy
      await axios.post('/api/admin/policies', form);
    }
    setForm({ name: '', description: '', price: '', duration: '' });
    setShowForm(false); // Hide the form after submit
    fetchPolicies();
  };

  const handleEdit = (policy) => {
    setForm(policy);
    setEditId(policy._id);
    setShowForm(true); // Show form for editing
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this policy?")) {
      await axios.delete(`/api/admin/policies/${id}`);
      fetchPolicies(); // Refresh the policy list
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Policies</h2>

      <button className="btn btn-primary mb-3" onClick={() => {
        setShowForm(!showForm);  // Toggle form visibility
        setForm({ name: '', description: '', price: '', duration: '' });
        setEditId(null); // Reset form for new policy
      }}>
        {showForm ? 'Hide Form' : 'Add Policy'}
      </button>

      {showForm && (
        <div className="mb-4 border p-3 rounded bg-light">
          <input
            className="form-control mb-2"
            placeholder="Policy Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="form-control mb-2"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <input
            className="form-control mb-2"
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <input
            className="form-control mb-2"
            placeholder="Duration"
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
          />
          <button className="btn btn-success" onClick={handleSubmit}>
            {editId ? 'Update' : 'Add'} Policy
          </button>
        </div>
      )}

      <table className="table table-bordered">
        <thead>
          <tr><th>#</th><th>Name</th><th>Description</th><th>Price</th><th>Duration</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {policies.map((p, i) => (
            <tr key={p._id}>
              <td>{i + 1}</td>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td>{p.duration}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(p)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p._id)}>
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

export default AdminPolicies;
