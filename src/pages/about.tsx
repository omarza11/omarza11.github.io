// About.tsx
import React from 'react';
import StarryNight from '../components/starryNight';
import Headshot from '../assets/Headshot.jpg'
import './about.css'

const About = () => {
  return (
    <div  className='content'>
      <div className='background-canvas' id='background-canvas'>
        <StarryNight />
      </div>
      <div className='container'>
        <div className='pages'>
          <div className='section-title'>
            <h2>About Me</h2>
            <span>About Me</span>
          </div>
          <div className='about'>
            <div className='about-image'>
              <img src={Headshot} alt="" width={400} height={500}></img>
            </div>
            <div className='about-info'>
              <h3>I am <strong>Omar Abdelqader</strong></h3>
              <p>I am a fast learner and always willing to take on a challenge. I have worked with react but wanted more experience so I created this project from scratch.</p>
              <ul>
                <li>
                  <b>Interests</b> Tech, Puzzles, Dogs
                </li>
                <li>
                  <b>1st Language</b> Java
                </li>
                <li>
                  <b>Favorite Languages</b> Python, Java, SQL
                </li>
                <li>
                  <b>College</b> University of Illinois Urbana-Champaign
                </li>
                <li>
                  <b>Major</b> Computer Science
                </li>
                <li>
                  <b>Email</b> omarabdelqader35@gmail.com
                </li>
                <li>
                  <b>Location</b> Chicago, IL
                </li>
              </ul>

            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default About;