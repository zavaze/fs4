import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const slideimg = [
  {
    image: '/images/p1.png',
  },
  {
    image: '/images/p2.png',
  },
  {
    image: '/images/p3.png',
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      // eslint-disable-next-line react-hooks/exhaustive-deps
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideRight = () => {
    setCurrent(current === slideimg.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? slideimg.length - 1 : current - 1);
  };

  return (
    <div>
      <div className="con-slider">
        <div
          className="carousel"
          onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timeOut);
          }}
          onMouseLeave={() => {
            setAutoPlay(true);
          }}
        >
          <div className="carousel_wrapper">
            {slideimg.map((image, index) => {
              return (
                /* (condition) ? true : false */

                <div
                  key={index}
                  className={
                    index === current
                      ? 'carousel_card carousel_card-active'
                      : 'carousel_card'
                  }
                >
                  <img className="card_image" src={image.image} alt="" />
                </div>
              );
            })}
            <div className="carousel_arrow_left" onClick={slideLeft}>
              &lsaquo;
            </div>
            <div className="carousel_arrow_right" onClick={slideRight}>
              &rsaquo;
            </div>
            <div className="carousel_pagination">
              {slideimg.map((_, index) => {
                return (
                  <div
                    key={index}
                    className={
                      index === current
                        ? 'pagination_dot pagination_dot-active'
                        : 'pagination_dot'
                    }
                    onClick={() => setCurrent(index)}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="headerMenu">
          <div className="menuItem">
            <img src="/images/m1.png" alt="Best Seller" />
            <p>Best Seller</p>
          </div>
          <div className="menuItem">
            <img src="/images/m2.png" alt="To Subscribe" />
            <p>To Subscribe</p>
          </div>
          <div className="menuItem">
            <img src="/images/m3.png" alt="Hot Deal" />
            <p>Hot Deal</p>
          </div>
          <div className="menuItem">
            <img src="/images/m4.png" alt="Stay Healthy" />
            <p>Guilt Free Snack</p>
          </div>
          <div className="menuItem">
            <img src="/images/m5.png" alt="Stay Healthy" />
            <p>Stay Healthy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
