import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt } from 'react-icons/fa'; // Import shield icon
import './Navbar.css'; // Optional: Add custom styles if needed

const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo and Brand */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <FaShieldAlt className="text-primary fs-3 me-2" />
          <span className="fw-bold text-dark fs-4">InsuranceDhoka</span>
        </a>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Insurance Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="Insurance"
                id="insuranceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Insurance
              </a>
              <ul className="dropdown-menu" aria-labelledby="insuranceDropdown">
                <li><a className="dropdown-item" href="/insurance/car">Car Insurance</a></li>
                <li><a className="dropdown-item" href="/insurance/bike">Bike Insurance</a></li>
                <li><a className="dropdown-item" href="/insurance/health">Health Insurance</a></li>
                <li><a className="dropdown-item" href="/insurance/life">Life Insurance</a></li>
                <li><a className="dropdown-item" href="/insurance/term">Term Insurance</a></li>
                <li><a className="dropdown-item" href="/insurance/travel">Travel Insurance</a></li>
              </ul>
            </li>

            {/* Insurance Advisors Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="Insurance Advisors"
                id="advisorsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Insurance Advisors
              </a>
              <ul className="dropdown-menu" aria-labelledby="advisorsDropdown">
                <li><a className="dropdown-item" href="/admin">Find Advisor</a></li>
                <li><a className="dropdown-item" href="/admin/auth">Become an Advisor</a></li>
              </ul>
            </li>

            {/* Renew */}
            <li className="nav-item">
              <a className="nav-link" href="/renew">Renew</a>
            </li>

            {/* Support Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="Support"
                id="supportDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Support
              </a>
              <ul className="dropdown-menu" aria-labelledby="supportDropdown">
                <li><a className="dropdown-item" href="/FAQs">FAQs</a></li>
                <li><a className="dropdown-item" href="/contact">Contact Us</a></li>
              </ul>
            </li>

            {/* News Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="News"
                id="newsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                News
              </a>
              <ul className="dropdown-menu" aria-labelledby="newsDropdown">
                <li><a className="dropdown-item" href="/insurance-news">Insurance News</a></li>
                <li><a className="dropdown-item" href="/guides">Tips & Guides</a></li>
              </ul>
            </li>

            {/* Track & Policy Download */}
            <li className="nav-item">
              <a className="nav-link" href="/track-policy">Track & Policy Download</a>
            </li>

            {/* Login Button */}
            <li className="nav-item">
              <button
                className="btn btn-danger rounded-pill px-4 ms-3"
                onClick={handleLoginClick}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
