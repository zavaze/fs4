import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Categories.css';
import { categories } from '../data';
const Categories = () => {
  return (
    <div className="categories-con">
      <h1>CATEGORIES</h1>
      <div className="categories">
        {categories.map((item) => (
          <div key={item.cat} className="categories-card">
            <Link to={`/Products/${item.cat}`}>
              <img src={item.img} alt="Beef" />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/CategoriesScreen">
        <button className="explore-btn">Explore More</button>
      </Link>
    </div>
  );
};

export default Categories;
