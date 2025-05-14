import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAuth.css'; // Optional: Add custom styles

const AdminAuth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [formData, setFormData] = useState({ email: '', password: '', username: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle Admin Login
      alert(`Admin Logged in with Email: ${formData.email}`);
      navigate('/admin/dashboard'); // Redirect to Admin Dashboard
    } else {
      // Handle Admin Registration
      alert(`Admin Registered with Email: ${formData.email}`);
      navigate('/admin/dashboard'); // Redirect to Admin Dashboard
    }
  };

  return (
    <div className="admin-auth-container">
      <div className="admin-auth-card">
        <div className="auth-toggle">
          <button
            className={`btn ${isLogin ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`btn ${!isLogin ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        <h2 className="text-center mb-4">{isLogin ? 'Admin Login' : 'Admin Register'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter your username"
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAuth;