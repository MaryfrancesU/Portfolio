import "./AboutMe.scss";
import { ReactComponent as GitHubSVG } from "../shared/icons/github.svg";
import { ReactComponent as LinkedInSVG } from "../shared/icons/linkedin.svg";
import NavBar from "../shared/NavBar/NavBar";
import AllSkillsIcons from "../Skills/AllSkillsIcons";
import Ratings from "../shared/Ratings/Ratings";

const GitHubSVGLink = (
  <a href="https://github.com/MaryfrancesU">
    <GitHubSVG className="iconToInvert" />
  </a>
);

const LinkedInSVGLink = (
  <a href="https://www.linkedin.com/in/maryfrances-umeora-074097195/">
    <LinkedInSVG />
  </a>
);

const AboutMe = () => {
  return (
    <>
      <NavBar currentPage="about" />
      <div className="about-container">
        <div className="grid-item item1">
          <h1> A LITTLE ABOUT ME! </h1>
        </div>

        <div className="grid-item item2">
          <p>Hi! I&apos;m Maryfrances!</p>
          <p>
            I have a Bachelor&apos;s Degree in Computer Science and have been
            working in the tech industry for nearly half a decade.
          </p>
          <p>
            I knew that I wanted a career in computer science by the time I was
            thirteen years old, halfway through my very first middle school
            computer science class.
          </p>
          <p>
            It&apos;s always been clear to me that I possess a scientific mind,
            a logical nature, and an inexplicable passion for identifying,
            analyzing, and solving problems — yet I&apos;ve always been a little
            artsy, too. Technology allows me to take creativity, logic, a bit of
            programming and a dash of architecture and design skills, and apply
            them to building the solutions that power our modern society.
          </p>
          <p>
            As such, I am most interested in using my coding skills in a
            creative way, and am always looking for more opportunities to learn
            and grow!
          </p>
          {GitHubSVGLink} {LinkedInSVGLink}
        </div>

        <div className="grid-item item3">
          <h2>My Tech Stack </h2>
          <AllSkillsIcons />
        </div>

        <div className="grid-item item4">
          <h2> Languages </h2>
          <ul>
            <li>
              <div> English</div>
              <Ratings rating={5} />
            </li>
            <li>
              <div> Japanese </div>
              <Ratings rating={4} />
            </li>
            <li>
              <div> French </div>
              <Ratings rating={1} />
            </li>
          </ul>
          <p> ...Do all my programming languages count? </p>
        </div>

        <div className="grid-item item5">
          <h2> I am... </h2>
          <ul>
            <li> smart </li>
            <li> innovative </li>
            <li> hard working </li>
            <li> team-oriented </li>
            <li> a fast learner </li>
            <li> a people person </li>
            <li> a natural mentor and leader </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
