// About.tsx
import React from 'react';
import StarryNight from '../components/starryNight';

const About = () => {
  return (
    <div  className='content'>
      <div className='background-canvas' id='background-canvas'>
        <StarryNight />
      </div>
    </div>
  );
};

export default About;