import "./Projects.scss";
import NavBar from "../shared/NavBar/NavBar";
import ProjectCardGroup from "./ProjectCardGroup";
import {
  groupProjectsGroup,
  learningGroup,
  mobileDevGroup,
  webDevGroup,
} from "./projects.data";

const Projects = () => {
  return (
    <div>
      <NavBar currentPage="projects" />
      <div className="projects-container">
        <p className="page-description">
          My grades and experience are one way to showcase my skills as a
          developer, and the projects I&apos;ve built outside of school and work
          are another!
        </p>

        <ProjectCardGroup projectGroup={learningGroup} />
        <ProjectCardGroup projectGroup={webDevGroup} />
        <ProjectCardGroup projectGroup={mobileDevGroup} />
        <ProjectCardGroup projectGroup={groupProjectsGroup} />
      </div>
    </div>
  );
};

export default Projects;
