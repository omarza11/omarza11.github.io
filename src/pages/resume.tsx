// Resume.tsx
import React from 'react';
import StarryNight from '../components/starryNight';
import './resume.css'
import { BsBriefcase } from "react-icons/bs";
import {BiBook} from 'react-icons/bi';
import {VscVscode} from 'react-icons/vsc'

const Resume = () => {
  return (
    <div  className='content'>
      <div className='background-canvas' id='background-canvas'>
        <StarryNight />
      </div>
      <div className='container'>
        <div className='pages'>
          <div className='section-title'>
            <h2>Resume</h2>
            <span>Resume</span>
          </div>
          <div className='sub-title'>
            <h3><BsBriefcase /> Experience</h3>
          </div>
          <div className='resume-wrapper'>

          </div>
          <div className='sub-title'>
            <h3><BiBook /> Education</h3>
          </div>
          <div className='resume-wrapper'>

          </div>
          <div className='sub-title'>
            <h3><VscVscode />Technical Skills</h3>
          </div>
          <div className='resume-wrapper'>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;