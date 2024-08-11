// index.tsx
import React from 'react';
import StarryNight from '../components/starryNight';
import { SocialIcon } from 'react-social-icons'


const Home = () => {
  return (
    <div  className='content'>
      <div className='background-canvas' id='background-canvas'>
        <StarryNight />
      </div>
      <div className='container'>
        <div className='home'>
          <h1>Omar Abdelqader</h1>
          <h5>Software Engineer</h5>
          <p> I created this website to share my background, resume, and projects I have worked on. 
            I am currently an Assiocate Software Engineer at Gelber Group LLC.
          </p>
          <p>
            I'm based in Chicago and went to school at the University of Illinois Urbana-Champaign where I studied Computer Science.
            I have had two internships at Amazon working in the Devices Org. Now I work in Fintech as a DevOps Software Engineer.
            I enjoy learning new languages, working on projects that are used by people daily, and combining both Technology with Finance.
          </p>
          <br />
          <ul className='icons'>
            <li> 
              <SocialIcon url="https://github.com/omarza11" bgColor='#3b3b3b'/>
              <SocialIcon url="https://linkedin.com/in/omar-abdelqader1" bgColor='#3b3b3b'/>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;