// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [role, setRole] = useState('user'); // Toggle between 'user' or 'admin'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === 'admin' && email === 'admin@example.com' && password === 'admin123') {
      navigate('/admin-dashboard');
    } else if (role === 'user' && email === 'user@example.com' && password === 'user123') {
      navigate('/user-dashboard');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="text-center mb-4">{role === 'admin' ? 'Admin Login' : 'User Login'}</h3>
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-outline-primary me-2" onClick={() => setRole('user')}>User</button>
        <button className="btn btn-outline-danger" onClick={() => setRole('admin')}>Admin</button>
      </div>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
