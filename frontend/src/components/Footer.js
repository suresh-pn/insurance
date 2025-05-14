import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5 border-top">
      <Container>
        <Row>
          <Col md={4}>
            <h5>InsuranceDhoka</h5>
            <p>Helping you choose the best insurance plans wisely.</p>
          </Col>
          <Col md={4}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="Home">Home</a></li>
              <li><a href="insurance">Products</a></li>
              <li><a href="FAQ">FAQ</a></li>
              <li><a href="Contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6>Contact</h6>
            <p>Email: support@insurancedhoka.com</p>
            <p>Phone: +91-8747932167</p>
          </Col>
        </Row>
        <hr />
        <p className="text-center">© 2025 InsuranceDhoka. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
