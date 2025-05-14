import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/products', {
        name,
        description,
        price,
        category,
      });
      console.log('Product added:', response.data);
      // Handle success (e.g., redirect, show notification)
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit" onClick={handleAddProduct}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
