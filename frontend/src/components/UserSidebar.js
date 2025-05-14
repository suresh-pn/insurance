import React from 'react';
import { Nav } from 'react-bootstrap';

export default function Sidebar() {
  return (
    <div className="bg-light p-3" style={{ minHeight: '100vh', width: '200px' }}>
      <Nav className="flex-column">
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/dashboard/select-insurance">Select Insurance</Nav.Link>
        <Nav.Link href="/dashboard/profile">Profile</Nav.Link>
        <Nav.Link href="/dashboard/history">History</Nav.Link>
        <Nav.Link href="/dashboard/payments">Payments</Nav.Link>
        <Nav.Link href="/dashboard/renewals">Renewals</Nav.Link>
      </Nav>
    </div>
  );
}
