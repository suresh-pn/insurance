import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [role, setRole] = useState('user'); // admin | user
  const [mode, setMode] = useState('login'); // login | register
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Load users from localStorage or start with an empty array
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (mode === 'register') {
      // Check if user already exists
      const exists = users.find(
        (user) => user.email === formData.email && user.role === role
      );
      if (exists) {
        alert(`${role} already registered with this email`);
        return;
      }

      // Save new user
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role,
      };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert(`${role.charAt(0).toUpperCase() + role.slice(1)} registered successfully`);
      setMode('login'); // Switch to login after registration
    } else {
      // Login
      const user = users.find(
        (user) =>
          user.email === formData.email &&
          user.password === formData.password &&
          user.role === role
      );

      if (user) {
        alert(`${role.charAt(0).toUpperCase() + role.slice(1)} login successful`);
        if (role === 'admin') {
          navigate('/AdminDashboard');
        } else {
          navigate('/DashboardPage');
        }
      } else {
        alert('Invalid login credentials');
      }
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <div className="card shadow border-0">
        <div className="card-body">
          <h4 className="text-center mb-4">
            {mode === 'login' ? 'Login' : 'Register'} as{' '}
            {role === 'admin' ? 'Admin' : 'User'}
          </h4>

          <div className="d-flex justify-content-between mb-4">
            <div className="btn-group">
              <button
                type="button"
                className={`btn btn-outline-primary ${role === 'user' ? 'active' : ''}`}
                onClick={() => setRole('user')}
              >
                User
              </button>
              <button
                type="button"
                className={`btn btn-outline-primary ${role === 'admin' ? 'active' : ''}`}
                onClick={() => setRole('admin')}
              >
                Admin
              </button>
            </div>

            <div className="btn-group">
              <button
                type="button"
                className={`btn btn-outline-secondary ${mode === 'login' ? 'active' : ''}`}
                onClick={() => setMode('login')}
              >
                Login
              </button>
              <button
                type="button"
                className={`btn btn-outline-secondary ${mode === 'register' ? 'active' : ''}`}
                onClick={() => setMode('register')}
              >
                Register
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {mode === 'register' && (
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              {mode === 'login' ? 'Login' : 'Register'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
