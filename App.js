import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('./products.json')
      .then((x) => x.json())
      .then((x) => setData(x.products));
  }, []);
  return (
    <div className="App">
      <div className="search-bar">
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <div className="product-list">
        {data
          .filter(
            (x) =>
              x.category.toLowerCase().includes(filter.toLowerCase()) ||
              x.title.toLowerCase().includes(filter.toLowerCase()) ||
              x.description.toLowerCase().includes(filter.toLowerCase())
          )
          .map((x, index) => (
            <div key={index} className="product-box">
              <img src={x.thumbnail} className="product-image" alt="" />
              <div className="product-details">
                <div className="product-title"> {x.title}</div>
                <div className="product-description">{x.description}</div>
                <div className="product-price">price: {x.price}</div>
                <div className="product-discount">discount: {x.discountPercentage}</div>
                <div className="product-rating">rating: {x.rating}</div>
                <div className="product-stock">stock: {x.stock}</div>
                <div className="product-brand">brand: {x.brand}</div>
                <div className="product-category">category: {x.category}</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;