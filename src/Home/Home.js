import "./Home.scss";
import NavBar from "../shared/NavBar/NavBar";
import heroImage from "../shared/images/hero-image.png";
import TypingEffect from "../animations/TypingEffect";
import { ReactComponent as ComputerIcon } from "../shared/icons/computer.svg";
import { ReactComponent as PhoneIcon } from "../shared/icons/smartphone.svg";
import { ReactComponent as CloudIcon } from "../shared/icons/cloud.svg";
// import AllSkillsIcons from "./AllSkillsIcons";

const Home = () => {
  return (
    <>
      <NavBar currentPage="home" />

      <div className="container">
        <div className="section hero-section">
          <div className="description">
            <h1> MARYFRANCES UMEORA </h1>
            <TypingEffect />
            <div className="buttons">
              <a href="/Portfolio/about"> ABOUT ME </a>
              <a href="/Portfolio/projects"> MY PROJECTS </a>
              <a href="/Portfolio/experience"> MY CAREER </a>
            </div>
          </div>

          <div className="image">
            <img src={heroImage} />
          </div>
        </div>

        <div className="section skills-section">
          <div className="what-i-build">
            <h1> WHAT I BUILD </h1>

            <div className="tiles">
              <div className="tile web">
                <ComputerIcon className="icon"/>
                <p>WEB APPS</p>
              </div>
              <div className="tile mobile">
                <PhoneIcon className="icon"/>
                <p>MOBILE APPS</p>
              </div>
              <div className="tile cloud">
                <CloudIcon className="icon"/>
                <p>CLOUD SOLUTIONS</p>
              </div>
            </div>
          </div>

          <div className="technologies">
            <h1> RELEVANT SKILLS </h1>
            {/* <AllSkillsIcons /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
