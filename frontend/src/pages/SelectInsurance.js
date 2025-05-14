import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const SelectInsurance = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products', err));
  }, []);

  return (
    <Container className="mt-4">
      <h3 className="mb-4 text-center">Choose Your Insurance</h3>
      <Row>
        {products.map(product => (
          <Col key={product._id} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={product.imageUrl} height="200px" style={{ objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>₹{product.price}</strong></Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SelectInsurance;
