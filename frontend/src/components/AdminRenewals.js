import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminRenewals = () => {
  const [renewals, setRenewals] = useState([]);
  const [form, setForm] = useState({ userId: '', policyId: '', status: 'Pending' });
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchRenewals = async () => {
    const res = await axios.get('/api/admin/renewals');
    setRenewals(res.data);
  };

  useEffect(() => {
    fetchRenewals();
  }, []);

  const handleSubmit = async () => {
    if (editId) {
      await axios.put(`/api/admin/renewals/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post('/api/admin/renewals', form);
    }
    setForm({ userId: '', policyId: '', status: 'Pending' });
    setShowForm(false);
    fetchRenewals();
  };

  const handleEdit = (renewal) => {
    setForm(renewal);
    setEditId(renewal._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this renewal?')) {
      await axios.delete(`/api/admin/renewals/${id}`);
      fetchRenewals();
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Renewals</h2>
      <button className="btn btn-primary mb-3" onClick={() => {
        setShowForm(!showForm);
        setForm({ userId: '', policyId: '', status: 'Pending' });
        setEditId(null);
      }}>
        {showForm ? 'Hide Form' : 'Add Renewal'}
      </button>

      {showForm && (
        <div className="mb-4 border p-3 rounded bg-light">
          <input className="form-control mb-2" placeholder="User ID"
            value={form.userId} onChange={(e) => setForm({ ...form, userId: e.target.value })} />
          <input className="form-control mb-2" placeholder="Policy ID"
            value={form.policyId} onChange={(e) => setForm({ ...form, policyId: e.target.value })} />
          <select className="form-control mb-2"
            value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
            <option>Pending</option>
            <option>Completed</option>
          </select>
          <button className="btn btn-success" onClick={handleSubmit}>
            {editId ? 'Update' : 'Add'} Renewal
          </button>
        </div>
      )}

      <table className="table table-bordered">
        <thead>
          <tr><th>#</th><th>User ID</th><th>Policy ID</th><th>Status</th><th>Renewal Date</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {renewals.map((r, i) => (
            <tr key={r._id}>
              <td>{i + 1}</td>
              <td>{r.userId}</td>
              <td>{r.policyId}</td>
              <td>{r.status}</td>
              <td>{new Date(r.renewalDate).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(r)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(r._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRenewals;
