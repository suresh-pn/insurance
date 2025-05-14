import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this URL with your backend endpoint for fetching products
    Axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>View Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button className="btn btn-primary">View</button>
                <button className="btn btn-warning ms-2">Edit</button>
                <button className="btn btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProducts;
