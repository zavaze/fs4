import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
  return (
    <div>
      <div className="product-container">
        <div>
          <Link to={`/Product/${item._id}`}>
            <img className=" product-img" src={item.img} alt="" />
            <h2 className="product-title">{item.title}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
