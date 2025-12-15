import ProjectCard from "./ProjectCard";
import PropTypes from "prop-types";
import "./ProjectCardGroup.scss";

const ProjectCardGroup = ({ projectGroup }) => {
  const { title, subtitle, projects } = projectGroup;

  return (
    <div className="card-group-container">
      <h2> {title} </h2>
      <p className="subtitle"> {subtitle} </p>

      <div className="card-group">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.imageSrc}
            title={project.title}
            description={project.description}
            techstack={project.techstack}
            available={project.available}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

ProjectCardGroup.propTypes = {
  projectGroup: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        imageSrc: PropTypes.string,
        description: PropTypes.string.isRequired,
        techstack: PropTypes.string.isRequired,
        available: PropTypes.bool.isRequired,
        link: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default ProjectCardGroup;
