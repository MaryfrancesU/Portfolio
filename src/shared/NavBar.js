import './NavBar.scss';
import React from 'react'
import PropTypes from 'prop-types';

const NavBar = ({currentPage}) => {

    return (
        <div>
            <div className="navbar">
                <ul className="navbar-list">
                    <li>
                        <ul className='menu-links'>
                        <li> 
                            <a href="/"> Home </a> 
                        </li>

                        <li className={`${currentPage==='about' ? 'selected' : ''}`}> 
                            <a href="/about"> About </a> 
                        </li>

                        <li className={`${currentPage==='projects' ? 'selected' : ''}`}> 
                            <a href="/projects"> Projects </a> 
                        </li>

                        <li className={`${currentPage==='experience' ? 'selected' : ''}`}> 
                            <a href="/experience"> Experience </a> 
                        </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id="line"> </div>
        </div>
  )
};

NavBar.propTypes = {
    currentPage: PropTypes.string.isRequired
};

export default NavBar;