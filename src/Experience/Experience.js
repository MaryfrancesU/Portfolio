import React from 'react';
import './Experience.scss';
import NavBar from '../shared/NavBar';

const Experience = () => {
  return (
    <div>
        <NavBar currentPage='experience' />

        <div className='experience-container'>
            This page is currently under construction. Please check back later!
            <br/> In the meantime, you can find me on &nbsp;
            <a href="https://www.linkedin.com/in/maryfrances-umeora-074097195/">LinkedIn</a>.
        </div>
      
    </div>
  )
}

export default Experience;