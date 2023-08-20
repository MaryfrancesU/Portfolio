import './Home.scss';
import React from 'react';
// import Journey from './Journey/Journey';
import NavBar from '../shared/NavBar';

const Home = () => {

  return (
    <>
        <NavBar currentPage='home' />
        {/* <div className='notice'> 
            <span> NOTE!! </span>
            This page is undergoing a makeover (which is why dark mode looks so awful right now). 
            Check out the other pages for now! 
        </div> */}

        <div className='container'>
            <div className='quote'>
                <p className="regtxt"> Hi, I&apos;m </p>
                <p id="mf"> Maryfrances </p>
                <p className="regtxt"> and I believe that </p>
                <p id="learning"> &ldquo;Learning is a lifelong journey.&rdquo; </p>
            </div>
            {/* <Journey /> */}

            <div className='links'>

                <a className="link-outline" href='/Portfolio/about'> 
                    <div className="link-cover">
                        ABOUT ME
                    </div>
                    <span className="link-desc"> Click to learn more about me! </span>
                </a>

                <a className="link-outline" href='/Portfolio/projects'> 
                    <div className="link-cover">
                        MY PROJECTS
                    </div>
                    <span className="link-desc"> Click for some projects I&apos;ve made! </span>
                </a>

                <a className="link-outline" href='/Portfolio/experience'> 
                    <div className="link-cover">
                        MY EXPERIENCE 
                    </div>
                    <span className="link-desc"> Click to see my previous jobs! </span>
                </a>

            </div>
        </div>
    </>
  )
}

export default Home;