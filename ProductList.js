import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const ProductList() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('/products.json')
      .then(x => x.json)
      .then(x=> setData(x.products))
      .then(error => console.error(error));
  }, []);

  return (
    <div className="ProductList">
      <input value={filter} onClick={e=> setFilter(e.target.value)}/>
      {
      data.filter(x=> x.category.includes(filter))
      .map((x, index) =>
        <div key ={index}>
        <Card style={{ width: '18rem' }}>
          <Card.Img src={x.thumbnail} />
          <Card.Body>
            <Card.Title>{x.title}</Card.Title>
            <Card.Text>{x.description}</Card.Text>
            <Button variant="primary">{product.price}</Button>
          </Card.Body>
        </Card>
        </div>
      )}
    </div>
  );
}

export default ProductList;