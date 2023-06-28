import './NavBar.scss';
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

const NavBar = ({currentPage}) => {
    const html = document.documentElement;
    const [heavenlyBody, setHeavenlyBody] = useState("");
    const currentTheme = window.sessionStorage.getItem("mu-portfolio--theme");

    useEffect(() => {
        setHeavenlyBody(currentTheme === "dark" ? "moon" : "sun");
    }, [html, currentTheme])

    const toggleTheme = () =>{
        if (html.dataset.theme == "light") {
            window.sessionStorage.setItem("mu-portfolio--theme", "dark");
            html.dataset.theme = "dark";
            setHeavenlyBody("moon");
        }
        else {
            window.sessionStorage.setItem("mu-portfolio--theme", "light");
            html.dataset.theme = "light";
            setHeavenlyBody("sun");
        }
    }

    return (
        <div>
            <div className="navbar">
                <ul className="navbar-list">
                    <li>
                        <ul className='menu-links'>
                        <li className={`${currentPage==='home' ? 'selected' : ''}`}> 
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

                        <li>
                            <div className="theme-toggle" onClick={toggleTheme}>
                                <div className={heavenlyBody}> </div>
                            </div>
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