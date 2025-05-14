import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPayments = () => {
  const [payments, setPayments] = useState([]);
  const [form, setForm] = useState({ userId: '', policyId: '', amount: '', status: 'Success' });
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchPayments = async () => {
    const res = await axios.get('/api/admin/payments');
    setPayments(res.data);
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleSubmit = async () => {
    if (editId) {
      await axios.put(`/api/admin/payments/${editId}`, form);
      setEditId(null);
    } else {
      await axios.post('/api/admin/payments', form);
    }
    setForm({ userId: '', policyId: '', amount: '', status: 'Success' });
    setShowForm(false);
    fetchPayments();
  };

  const handleEdit = (payment) => {
    setForm(payment);
    setEditId(payment._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this payment?")) {
      await axios.delete(`/api/admin/payments/${id}`);
      fetchPayments();
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Payments</h2>

      <button className="btn btn-primary mb-3" onClick={() => {
        setShowForm(!showForm);
        setForm({ userId: '', policyId: '', amount: '', status: 'Success' });
        setEditId(null);
      }}>
        {showForm ? 'Hide Form' : 'Add Payment'}
      </button>

      {showForm && (
        <div className="mb-4 border p-3 rounded bg-light">
          <input className="form-control mb-2" placeholder="User ID"
            value={form.userId} onChange={(e) => setForm({ ...form, userId: e.target.value })} />
          <input className="form-control mb-2" placeholder="Policy ID"
            value={form.policyId} onChange={(e) => setForm({ ...form, policyId: e.target.value })} />
          <input className="form-control mb-2" placeholder="Amount"
            type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
          <select className="form-control mb-2"
            value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
            <option value="Success">Success</option>
            <option value="Failed">Failed</option>
          </select>
          <button className="btn btn-success" onClick={handleSubmit}>
            {editId ? 'Update' : 'Add'} Payment
          </button>
        </div>
      )}

      <table className="table table-bordered">
        <thead>
          <tr><th>#</th><th>User ID</th><th>Policy ID</th><th>Amount</th><th>Status</th><th>Date</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {payments.map((p, i) => (
            <tr key={p._id}>
              <td>{i + 1}</td>
              <td>{p.userId}</td>
              <td>{p.policyId}</td>
              <td>{p.amount}</td>
              <td>{p.status}</td>
              <td>{new Date(p.paymentDate).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(p)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPayments;
