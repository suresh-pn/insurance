import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook for navigation after login

  const handleLogin = (e) => {
    e.preventDefault();

    // Example: Check for admin login credentials (you can modify as needed)
    if (email === "admin@example.com" && password === "admin123") {
      // Successful login, navigate to Admin Dashboard page
      navigate('/AdminDashboard');  // Redirect to Admin Dashboard page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="text-center mb-4">Admin Login</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email address</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Enter password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;

