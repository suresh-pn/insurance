import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Car Insurance', icon: '🚗', path: '/insurance/car' },
  { name: 'Bike Insurance', icon: '🏍️', path: '/insurance/bike' },
  { name: 'Health Insurance', icon: '🏥', path: '/insurance/health' },
  { name: 'Life Insurance', icon: '❤️', path: '/insurance/life' },
  { name: 'Term Insurance', icon: '🕒', path: '/insurance/term' },
  { name: 'Travel Insurance', icon: '✈️', path: '/insurance/travel' },
  { name: 'Business Insurance', icon: '🏢', path: '/insurance/business' },
  { name: 'Investment Plans', icon: '🏦', path: '/insurance/investment' },
  { name: 'Family Health Insurance', icon: '👨‍👩‍👧‍👦', path: '/insurance/family-health' },
  { name: 'Guaranteed Return Plans', icon: '💰', path: '/insurance/guaranteed-return' },
  { name: 'View More', icon: '🔍', path: '/insurance/more' },
];

const InsuranceCategories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-5 fw-semibold">Explore Insurance Categories</h2>
      <Row className="gy-4">
        {categories.map((cat, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3}>
            <Card
              className="h-100 text-center border-0 shadow-lg rounded-4"
              onClick={() => handleCategoryClick(cat.path)}
              style={{ cursor: 'pointer', padding: '20px', transition: '0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#e7f1ff',
                  fontSize: '28px',
                }}
              >
                {cat.icon}
              </div>
              <Card.Body>
                <Card.Title className="fs-6 fw-bold text-secondary">{cat.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InsuranceCategories;
