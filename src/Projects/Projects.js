import './Projects.scss';
import React from 'react';
import NavBar from '../shared/NavBar';
import ProjectCard from './Card/ProjectCard';

import retain from './images/retain.png';

const Projects = () => {

  return (
    <div>
       <NavBar currentPage='projects' />
        <div className='projects-container'>
            --Description of this page coming soon--

            <div className='project-section' id="learning-section">
                <h2> Having Fun Studying </h2>
                <p className='section-description'> 
                    I love to learning... and creating apps to help make the process just a little more efficient! 
                </p>

                <div className='section-cards'> 
                    <div className='section-cards--row'>
                        <ProjectCard 
                            src={retain}
                            title='Retain'
                            description='Flashcards are boring... what if we played a matching game instead?'
                            techstack='Ionic'
                            available={true}
                        />
                        <ProjectCard 
                            src="#"
                            title='WriteIt'
                            description='Quizlet decided to hide this feature behind a paywall... so I decided to make it myself!'
                            techstack='React, Firebase'
                            available={false}
                        />
                    </div>
                </div>
            </div>


            <div className='project-section' id="web-section">
                <h2> Web Dev </h2>
                <p className='section-description'> 
                    This is my specialty! 
                </p>

                <div className='section-cards'> 
                    <div className='section-cards--row'>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    
                    {/* <div className='section-cards--row'>
                        <ProjectCard />
                    </div> */}
                </div>
            </div>


            <div className='project-section' id="mobile-section">
                <h2> Mobile Dev </h2>
                <p className='section-description'> 
                    I dabble a little in shrinking the screen size.
                </p>

                <div className='section-cards'> 
                    <div className='section-cards--row'>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </div>


            <div className='project-section' id="group-section">
                <h2> Group Projects </h2>
                <p className='section-description'> 
                    Collaboration is my jam!
                </p>

                <div className='section-cards'> 
                    <div className='section-cards--row'>
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects;