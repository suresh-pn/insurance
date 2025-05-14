import React, { useState } from 'react';
import axios from 'axios';

function AdminAddProduct() {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    premium: '',
    description: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/products', product);
      alert('Product added successfully!');
      setProduct({ name: '', category: '', premium: '', description: '' });
    } catch (error) {
      alert('Failed to add product');
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add Insurance Product</h3>
      <form onSubmit={handleSubmit} className="border p-3 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input type="text" name="name" className="form-control" value={product.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Category (e.g. Car, Bike)</label>
          <input type="text" name="category" className="form-control" value={product.category} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Premium Amount</label>
          <input type="number" name="premium" className="form-control" value={product.premium} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" value={product.description} onChange={handleChange} rows="3" />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}

export default AdminAddProduct;
