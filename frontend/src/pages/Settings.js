import React, { useState } from 'react';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (check if fields are filled)
    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }

    // Make an API call to update user settings (example)
    // Axios.put('/api/admin/update', { username, email, password })
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error updating settings:', error);
    //   });

    // Reset form and clear error after successful submission
    setUsername('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="container">
      <h2>Settings</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
