import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook for navigation after login

  const handleLogin = (e) => {
    e.preventDefault();

    // For this example, I'm just checking if the email and password are not empty
    console.log("Form Submitted", email, password);  // Log form data for debugging

    if (email === "user@example.com" && password === "password") {
      console.log("Login successful! Redirecting to dashboard.");
      // Successful login, redirect to dashboard
      navigate('/login/UserDashboard');
    } else {
      console.log("Invalid credentials");
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="text-center mb-4">User Login</h3>
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
        <p className="text-center mt-3">
          Don't have an account? <a href="/user/register">Register</a>
        </p>
      </form>
    </div>
  );
}

export default UserLogin;
