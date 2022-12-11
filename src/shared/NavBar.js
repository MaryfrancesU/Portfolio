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
                            <a href="/Portfolio"> Home </a> 
                        </li>

                        <li className={`${currentPage==='about' ? 'selected' : ''}`}> 
                            <a href="/Portfolio/about"> About </a> 
                        </li>

                        <li className={`${currentPage==='projects' ? 'selected' : ''}`}> 
                            <a href="/Portfolio/projects"> Projects </a> 
                        </li>

                        <li className={`${currentPage==='experience' ? 'selected' : ''}`}> 
                            <a href="/Portfolio/experience"> Experience </a> 
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