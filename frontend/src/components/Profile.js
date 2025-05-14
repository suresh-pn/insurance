import React from 'react';

export default function Profile() {
  return (
    <div>
      <h3>Manage Profile</h3>
      <form>
        <input type="text" className="form-control mb-2" placeholder="Full Name" />
        <input type="email" className="form-control mb-2" placeholder="Email" />
        <input type="password" className="form-control mb-2" placeholder="Password" />
        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
}
