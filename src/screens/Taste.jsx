import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Products } from '../components/Products';
import { publicRequest } from '../requestMethod';
const Taste = () => {
  const location = useLocation();
  const taste = location.pathname.split('/')[2];

  const [taste1, setTaste1] = useState({});
  useEffect(() => {
    const getTaste1 = async () => {
      try {
        const res = await publicRequest.get('taste/find/' + taste);
        setTaste1(res.data);
      } catch (error) {}
    };
    getTaste1();
  }, [taste]);
  return (
    <div>
      <img src={taste1.img} alt="" />
      <h1>{taste1.title}</h1>
      <p>{taste1.desc}</p>
      <Products slug={taste} />
    </div>
  );
};

export default Taste;
