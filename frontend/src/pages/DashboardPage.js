import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaHistory, FaCreditCard, FaRedoAlt, FaSignOutAlt } from 'react-icons/fa'; // Importing icons from react-icons

const UserSidebar = () => {
  // Function to handle logout
  const handleLogout = () => {
    // Clear user session or token, depending on how you manage authentication
    localStorage.removeItem('authToken'); // Example if you're storing token in localStorage
    window.location.href = '/login'; // Redirect to the login page
  };

  return (
    <div className="bg-light border-end p-3" style={{ width: '250px', height: '100vh' }}>
      <h5 className="text-primary mb-4">User Menu</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink to="/DashboardPage/UserDashboard" className="nav-link">
            <FaHome className="me-2" />
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/pages/select-insurance" className="nav-link">
            <FaUser className="me-2" />
            Select Insurance
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Pages/profile" className="nav-link">
            <FaUser className="me-2" />
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/history" className="nav-link">
            <FaHistory className="me-2" />
            History
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/UserPayments" className="nav-link">
            <FaCreditCard className="me-2" />
            Payments
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Pages/UserRenewals" className="nav-link">
            <FaRedoAlt className="me-2" />
            Renewals
          </NavLink>
        </li>
        
        {/* Logout Section with Icon */}
        <li className="nav-item mt-4">
          <button onClick={handleLogout} className="btn btn-danger w-100 d-flex align-items-center justify-content-start">
            <FaSignOutAlt className="me-2" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserSidebar;
