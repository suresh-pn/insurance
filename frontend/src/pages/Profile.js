import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/api/users/profile', { withCredentials: true })
      .then(res => setProfile(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Role:</strong> {profile.role}</p>
    </div>
  );
};

export default Profile;
