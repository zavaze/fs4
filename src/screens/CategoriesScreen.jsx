import React from 'react';
import Taste from '../components/Taste';
import '../styles/Category.css';
import { Link } from 'react-router-dom';
const CategoriesScreen = () => {
  return (
    <div className="category">
      <Taste />
      <div className="category-con">
        <div className="bar"></div>
        <h1>CATEGORIES</h1>
        <div className="wagyu-con">
          <h2>Wagyu</h2>
          <p>
            The unique taste and tenderness of highly marbled Wagyu beef makes
            for an unrivalled eating experience
          </p>
          <div className="products-card">
            <div className="product-card">
              <img src="/images/b1.png" alt="" />
              <h3 className="overlay">A5 Kobe Wagyu</h3>
            </div>
            <div className="product-card">
              <Link to={'/ProductList'}>
                <img src="/images/b2.png" alt="" />
                <h3 className="overlay">A5 Matsusaka Wagyu</h3>
              </Link>
            </div>
            <div className="product-card">
              <img src="/images/b3.png" alt="" />
              <h3 className="overlay">A5 Omi Wagyu</h3>
            </div>
          </div>
        </div>
        <div className="seafood-con">
          <h2>Seafood</h2>
          <p>
            People in Japan, a country surrounded by the ocean, have started
            eating seafood over 3000 years ago.
          </p>
          <div className="products-card">
            <div className="product-card">
              <img src="/images/sm1.png" alt="" />
              <Link to="/ProductScreen">
                <h3 className="overlay">King Salmon</h3>
              </Link>
            </div>
            <div className="product-card">
              <img src="/images/sm2.png" alt="" />
              <h3 className="overlay">A5 Matsusaka Wagyu</h3>
            </div>
            <div className="product-card">
              <img src="/images/sm3.png" alt="" />
              <h3 className="overlay">A5 Omi Wagyu</h3>
            </div>
          </div>
        </div>
        <div className="dairy-con">
          <h2>Dairy Product</h2>
          <p>
            Hokkaido milk is known across Japan for its excellent quality and
            delicious flavour, often considered the country's best milk.
          </p>
          <div className="products-card">
            <div className="product-card">
              <img src="/images/d1.png" alt="" />
              <h3 className="overlay">A5 Kobe Wagyu</h3>
            </div>
            <div className="product-card">
              <img src="/images/d2.png" alt="" />
              <h3 className="overlay">A5 Matsusaka Wagyu</h3>
            </div>
          </div>
        </div>
        <div className="others-con">
          <h2>Others</h2>
          <p>
            From the Uji region of Kyoto, rich in natural greenery, this area is
            where we have worked for three generations in the tea trade
          </p>
          <div className="products-card">
            <div className="product-card">
              <img src="/images/o1.png" alt="" />
              <h3 className="overlay">A5 Kobe Wagyu</h3>
            </div>
            <div className="product-card">
              <img src="/images/o2.png" alt="" />
              <h3 className="overlay">A5 Matsusaka Wagyu</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesScreen;
