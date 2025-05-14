import React from 'react';
import { Nav, Navbar as BSNavbar } from 'react-bootstrap';

export default function Navbar() {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg">
      <BSNavbar.Brand className="px-3">InsuranceDhoka</BSNavbar.Brand>
      <Nav className="ms-auto px-3">
        <Nav.Link href="/dashboard/profile">Profile</Nav.Link>
        <Nav.Link href="/">Logout</Nav.Link>
      </Nav>
    </BSNavbar>
  );
}
