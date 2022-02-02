import React from 'react';
import { useContext, useEffect } from 'react';
import CryptoContext from '../context/CryptoContext';

const Home = () => {

  const {getData} = useContext(CryptoContext)

  useEffect(() => {
  getData()
  }, [])
  
  return (
  <div>
      <h1>Home Page</h1>
  </div>
  );
};

export default Home;
