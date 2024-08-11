// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import headshot from '../assets/Headshot.jpg'
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='image-header'>
        <img src ={headshot} alt="Headshot"></img>
      </div>
      <ul className='sidebar-menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/programming">Programming</Link></li>
      </ul>
      <p className='copyright-info'>
        © 2024 <strong>Omar Abdelqader</strong>
      </p>
    </div>
  );
};

export default Sidebar;