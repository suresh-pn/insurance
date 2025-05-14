import React from 'react';

function adminRegister() {
  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h3 className="text-center mb-4">admin Register</h3>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Full Name" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Create password" />
        </div>
        <button type="submit" className="btn btn-success w-100">Register</button>
        <p className="text-center mt-3">
          Already have an account? <a href="/admin/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default adminRegister;
