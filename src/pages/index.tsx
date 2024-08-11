// index.tsx
import React from 'react';
import StarryNight from '../components/starryNight';

const Home = () => {
  return (
    <div className='background-canvas' id='background-canvas'>
      <StarryNight />
    </div>
  );
};

export default Home;