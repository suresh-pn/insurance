import React, { useEffect, useState } from 'react';
import { FaUsers, FaFileAlt, FaHandHoldingUsd } from 'react-icons/fa'; // Importing icons
import { Routes, Route } from 'react-router-dom'; // Importing React Router components
import AdminSidebar from '../components/Sidebar';
import AdminAddProduct from './AdminAddProduct';
import AdminUsers from '../components/AdminUsers';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activePolicies: 0,
    pendingClaims: 0,
  });

  // Simulate data fetching (you can use Axios for real API calls)
  useEffect(() => {
    // Simulated values, replace with actual data fetching logic
    setStats({
      totalUsers: 150,
      activePolicies: 75,
      pendingClaims: 10,
    });
  }, []);

  return (
    <div className="d-flex">
      <AdminSidebar />
      <div className="container mt-4">
        <h2 className="mb-4 text-center">Admin Dashboard</h2>

        <div className="row mt-4">
          {/* Card 1 - Total Users */}
          <div className="col-md-4 mb-3">
            <div className="card bg-primary text-white shadow-sm">
              <div className="card-body d-flex align-items-center">
                <FaUsers size={30} className="me-3" />
                <div>
                  <h5 className="card-title">Total Users</h5>
                  <p className="card-text">{stats.totalUsers}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Active Policies */}
          <div className="col-md-4 mb-3">
            <div className="card bg-success text-white shadow-sm">
              <div className="card-body d-flex align-items-center">
                <FaFileAlt size={30} className="me-3" />
                <div>
                  <h5 className="card-title">Active Policies</h5>
                  <p className="card-text">{stats.activePolicies}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Pending Claims */}
          <div className="col-md-4 mb-3">
            <div className="card bg-warning text-white shadow-sm">
              <div className="card-body d-flex align-items-center">
                <FaHandHoldingUsd size={30} className="me-3" />
                <div>
                  <h5 className="card-title">Pending Claims</h5>
                  <p className="card-text">{stats.pendingClaims}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add routing for different components */}
        <Routes>
          <Route path="add-product" element={<AdminAddProduct />} />
          <Route path="manage-users" element={<AdminUsers />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
