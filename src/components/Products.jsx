import React, { useEffect, useState } from 'react';
import Product from './Product';

import '../styles/ProductList.css';
import axios from 'axios';

export const Products = ({ cat }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : 'http://localhost:5000/api/products'
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);
  return (
    <div className="product-list-con">
      {products.map((item, i) => (
        <Product item={item} key={i} />
      ))}
    </div>
  );
};
