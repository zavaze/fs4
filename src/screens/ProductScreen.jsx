import React, { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Products.css';
import { publicRequest } from '../requestMethod.js';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

export const ProductScreen = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [product, setProduct] = useState({});

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    //update cart
    dispatch(addProduct({ ...product, quantity, size }));
  };

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);
  return (
    <div className="product-con">
      <div className="product-header-img">
        <img src={product.img} alt="" />
        <div className="shopping-list-icon">
          <AiOutlineHeart />
        </div>
      </div>
      <div className="product-body">
        <h1>{product.title}</h1>
        <h2>{product.price} Bath / 270-300 g</h2>
        <p className="product-detail">{product.desc}</p>
        <h2>Nutition Facts</h2>
        <div className="facts">
          {product.size?.map((s) => (
            <button key={s} className={'size'} onClick={() => setSize(s)}>
              <h4>{s}</h4>
              <p>Protein</p>
            </button>
          ))}
        </div>

        <div className="product-qty">
          <button className="qty-btn" onClick={() => handleQuantity('dec')}>
            -
          </button>
          <span className="qty-num">{quantity}</span>
          <button className="qty-btn" onClick={() => handleQuantity('inc')}>
            +
          </button>
        </div>
        <button className="add-to-cart" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
