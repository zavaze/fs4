import React from 'react';
import { useLocation } from 'react-router-dom';
import { Products } from '../components/Products';

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  return (
    <div>
      <title>{cat}</title>
      <h1>{cat}</h1>
      <Products cat={cat} />
    </div>
  );
};

export default ProductList;
