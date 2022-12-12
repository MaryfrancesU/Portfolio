import './Projects.scss';
import React from 'react';
import NavBar from '../shared/NavBar';
import ProjectCard from './Card/ProjectCard';

import retain from './images/retain.png';
import ravendesk from './images/ravendesk.png';
import studyspot from './images/studyspot.png';
import gotem from './images/gotem.png';

const Projects = () => {

  return (
    <div>
       <NavBar currentPage='projects' />
        <div className='projects-container'>
            My grades and experience are one way to showcase my skills as a developer, and the projects
            I&apos;ve built outside of work are another!

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
                            //src={}
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
                        <ProjectCard 
                            src={ravendesk}
                            title='RavenDesk'
                            description='The brain is a fickle mistress, so rather than trying to memorize all your characters and plot lines, use the RavenDesk! -Edgar Allen Poe (probably)'
                            techstack='PHP, SQL, HTML/CSS/JS'
                            available={false}
                        />
                        <ProjectCard 
                            //src={}
                            title='Mini Games'
                            description='Featuring classic games like Hangman, Tic Tac Toe, and Unscramble!'
                            techstack='React'
                            available={false}
                        />
                        <ProjectCard 
                            //src={}
                            title='Shopaholic'
                            description='I decided to try my hand at building a shopping app. I mean Jeff Bezos did it, so how hard can it be!'
                            techstack='React, Firebase'
                            available={false}
                        />
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
                        <ProjectCard 
                            //src={}
                            title='Randomizer'
                            description='For those days you find yourself indecisive, roll a die... or open this app!'
                            techstack='Android Studio, Java'
                            available={false}
                        />
                        <ProjectCard 
                            //src={}
                            title='Simple Calculator'
                            description='I made this project years ago to help me learn how to use Android Studio.'
                            techstack='Android Studio, Java'
                            available={false}
                        />
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
                        <ProjectCard 
                            src={studyspot}
                            title='StudySpot'
                            description='Ugh, the library&apos;s packed! Good thing you reserved a spot ahead of time!'
                            techstack='Flask Python, Jinja Templates, HTML/CSS/JS'
                            available={true}
                            link="https://github.com/MaryfrancesU/StudySpot"
                        />
                        <ProjectCard 
                            src={gotem}
                            title='Gotem'
                            description='Gotem allows users to quickly and efficiently schedule and obtain transportation for hospital and clinical visits.'
                            techstack='React, Firebase'
                            available={true}
                            link="https://github.com/soumildatta/gotem"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects;