import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminClaims = () => {
  const [claims, setClaims] = useState([]);
  const [form, setForm] = useState({ userId: '', policyId: '', reason: '', status: 'Pending' });
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchClaims = async () => {
    const res = await axios.get('/api/admin/claims');
    setClaims(res.data);
  };

  useEffect(() => {
    fetchClaims();
  }, []);

  const handleSubmit = async () => {
    if (editId) {
      await axios.put(`/api/admin/claims/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post('/api/admin/claims', form);
    }
    setForm({ userId: '', policyId: '', reason: '', status: 'Pending' });
    setShowForm(false);
    fetchClaims();
  };

  const handleEdit = (claim) => {
    setForm(claim);
    setEditId(claim._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this claim?")) {
      await axios.delete(`/api/admin/claims/${id}`);
      fetchClaims();
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Claims</h2>

      <button className="btn btn-primary mb-3" onClick={() => {
        setShowForm(!showForm);
        setForm({ userId: '', policyId: '', reason: '', status: 'Pending' });
        setEditId(null);
      }}>
        {showForm ? 'Hide Form' : 'Add Claim'}
      </button>

      {showForm && (
        <div className="mb-4 border p-3 rounded bg-light">
          <input
            className="form-control mb-2"
            placeholder="User ID"
            value={form.userId}
            onChange={(e) => setForm({ ...form, userId: e.target.value })}
          />
          <input
            className="form-control mb-2"
            placeholder="Policy ID"
            value={form.policyId}
            onChange={(e) => setForm({ ...form, policyId: e.target.value })}
          />
          <input
            className="form-control mb-2"
            placeholder="Reason"
            value={form.reason}
            onChange={(e) => setForm({ ...form, reason: e.target.value })}
          />
          <select
            className="form-control mb-2"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
          <button className="btn btn-success" onClick={handleSubmit}>
            {editId ? 'Update' : 'Add'} Claim
          </button>
        </div>
      )}

      <table className="table table-bordered">
        <thead>
          <tr><th>#</th><th>User ID</th><th>Policy ID</th><th>Reason</th><th>Status</th><th>Date</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {claims.map((c, i) => (
            <tr key={c._id}>
              <td>{i + 1}</td>
              <td>{c.userId}</td>
              <td>{c.policyId}</td>
              <td>{c.reason}</td>
              <td>{c.status}</td>
              <td>{new Date(c.date).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(c)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(c._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminClaims;
