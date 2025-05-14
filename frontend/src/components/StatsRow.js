import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSmileBeam, FaStar, FaFileInvoiceDollar } from 'react-icons/fa';

const stats = [
  {
    icon: <FaSmileBeam size={30} className="text-primary mb-2" />,
    label: '80 Lacs+',
    subText: 'Happy Smiles'
  },
  {
    icon: <FaStar size={30} className="text-warning mb-2" />,
    label: '4.8',
    subText: 'Rated on Google'
  },
  {
    icon: <FaFileInvoiceDollar size={30} className="text-success mb-2" />,
    label: '35k+',
    subText: 'Claims Served'
  }
];

const StatsRow = () => (
  <Container className="text-center my-5">
    <Row className="gy-4">
      {stats.map((stat, idx) => (
        <Col md={4} key={idx}>
          {stat.icon}
          <h4 className="fw-bold mb-0">{stat.label}</h4>
          <p className="text-muted">{stat.subText}</p>
        </Col>
      ))}
    </Row>
  </Container>
);

export default StatsRow;
