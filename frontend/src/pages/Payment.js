import React, { useState } from 'react';
import { createOrder } from '../services/api'; // ensure this points to your backend API
import 'bootstrap/dist/css/bootstrap.min.css';

const Payment = () => {
  const [insuranceId, setInsuranceId] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!insuranceId || !amount) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await createOrder({ insuranceId, amount });
      const { order } = response.data;

      const options = {
        key: 'your_razorpay_key_id', // Replace with your Razorpay Key ID
        amount: order.amount,
        currency: order.currency,
        name: 'InsuranceDhoka',
        description: 'Insurance Payment',
        order_id: order.id,
        handler: function (response) {
          alert('✅ Payment Successful!');
          console.log(response);
        },
        prefill: {
          name: 'John Doe',
          email: 'johndoe@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#0d6efd',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert('❌ Payment initiation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card shadow p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className="text-center mb-4">Insurance Payment</h3>

        <div className="mb-3">
          <label className="form-label">Insurance ID</label>
          <input
            type="text"
            className="form-control"
            value={insuranceId}
            onChange={(e) => setInsuranceId(e.target.value)}
            placeholder="Enter Insurance ID"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Amount (₹)</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
          />
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
};

export default Payment;
