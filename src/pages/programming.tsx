// Programming.tsx
import React from 'react';
import StarryNight from '../components/starryNight';

const Programming = () => {
  return (
    <div  className='content'>
      <div className='background-canvas' id='background-canvas'>
        <StarryNight />
      </div>
      <div className='container'>
        <div className='pages'>
          <div className='section-title'>
            <h2>Programming</h2>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Programming;