import "./AboutMe.scss";
import { ReactComponent as GitHubSVG } from "../shared/icons/github.svg";
import { ReactComponent as LinkedInSVG } from "../shared/icons/linkedin.svg";
import NavBar from "../shared/NavBar/NavBar";

const AboutMe = () => {
  const GitHubSVGLink = (
    <a href="https://github.com/MaryfrancesU" className="ghsvg">
      <GitHubSVG />
    </a>
  );

  const LinkedInSVGLink = (
    <a href="https://www.linkedin.com/in/maryfrances-umeora-074097195/">
      <LinkedInSVG />
    </a>
  );

  return (
    <div>
      <NavBar currentPage="about" />
      <div className="about-container">
        <div id="profile-pic">I&apos;m a little camera shy.</div>
        <div id="about-content">
          <h1> About Maryfrances </h1>
          <p>
            I knew that I wanted a career in computer science by the time I was
            thirteen years old, halfway through my very first middle school
            computer science class.
          </p>
          <p>
            I&apos;ve always been a little artsy, but I&apos;ve also always
            known that I possess a scientific mind, a logical heart, and an
            inexplicable passion for identifying, analyzing and solving
            problems. Technology allows me to take creativity, logic, a bit of
            programming and a dash of design skills, and apply them to building
            the very solutions that power our modern society. In other words,
            it&apos;s the perfect field for me!
          </p>
          <p>
            I currently work as a software engineer, and am always looking for
            more opportunities to learn and grow. Check me out!
          </p>
          {GitHubSVGLink} {LinkedInSVGLink}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
