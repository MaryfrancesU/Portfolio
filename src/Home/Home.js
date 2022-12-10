import './Home.scss';
import React from 'react';
import Journey from './Journey/Journey';

const Home = () => {

  return (
    <div className='container'>
        <div className='quote'>
            <p className="regtxt"> Hi, I&apos;m </p>
            <p id="mf"> Maryfrances </p>
            <p className="regtxt"> and I believe that </p>
            <p id="learning"> &ldquo;Learning is a lifelong journey.&rdquo; </p>
        </div>
        <Journey />
    </div>
  )
}

export default Home;