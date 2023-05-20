import React from 'react';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Taste from '../components/Taste';

const Homescreen = () => {
  return (
    <div className="home-con">
      <Carousel />
      <div className="bar"></div>
      <Categories />
      <div className="bar"></div>
      <Taste />
    </div>
  );
};

export default Homescreen;
