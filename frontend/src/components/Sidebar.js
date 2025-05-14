import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate for redirect
import { FaPlus, FaUserCog, FaList, FaClipboardList, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Icons for new functionality
import { Button } from 'react-bootstrap'; // Import Bootstrap Button for Logout

// Utility function for logging out
const logoutAdmin = () => {
  // Clear the session or token (assuming it's stored in localStorage)
  localStorage.removeItem('adminToken'); // Or use sessionStorage or cookies, depending on your setup

  // Redirect to login page
  window.location.href = '/login'; // You can use `navigate` if using react-router's useNavigate
};

const AdminSidebar = () => {
  const navigate = useNavigate(); // To navigate programmatically after logout

  // Logout handler
  const handleLogout = () => {
    logoutAdmin();
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className="bg-light border-end p-3" style={{ width: '250px', height: '100vh' }}>
      <h5 className="text-primary mb-4">Admin Menu</h5>
      <ul className="nav flex-column">
        {/* Sidebar links for routing */}
        <li className="nav-item">
          <NavLink to="add-product" className="nav-link d-flex align-items-center">
            <FaPlus size={20} className="me-2" />
            Add Product
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="manage-users" className="nav-link d-flex align-items-center">
            <FaUserCog size={20} className="me-2" />
            Manage Users
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="view-products" className="nav-link d-flex align-items-center">
            <FaList size={20} className="me-2" />
            View Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="view-orders" className="nav-link d-flex align-items-center">
            <FaClipboardList size={20} className="me-2" />
            View Orders
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="view-claims" className="nav-link d-flex align-items-center">
            <FaClipboardList size={20} className="me-2" />
            View Claims
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="settings" className="nav-link d-flex align-items-center">
            <FaCog size={20} className="me-2" />
            Settings
          </NavLink>
        </li>
      </ul>

      {/* Logout button */}
      <div className="mt-4">
        <Button variant="danger" className="w-100" onClick={handleLogout}>
          <FaSignOutAlt size={20} className="me-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;
