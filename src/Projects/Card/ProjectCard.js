import React from 'react';
import './ProjectCard.scss';
import PropTypes from 'prop-types';

const ProjectCard = ({src, title, description, techstack, available}) => {
  return (
    <div className='project-card'>
        <img src={src}/>
        
        <h4> {title} </h4>

        <p> {description} </p>

        <div className='tech-stack'> Tech Stack: {techstack} </div>

        <div className='button-outline'>
            <div className={`button ${available ? '' : 'disabled'}`}>
                {available
                    ? <a href="#"> CHECK IT OUT! </a>
                    : <a href="#"> COMING SOON... </a>
                }
            </div>
        </div>
        
    </div>
  )
};

ProjectCard.propTypes = {
    src: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techstack: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired
};

export default ProjectCard