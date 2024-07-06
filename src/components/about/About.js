import { FaDownload } from "react-icons/fa";
import "./about.css";
import SkillData from "./SkillsData";
import manLottie from "../../img/about-page/manLottie.gif";

export const About = (props) => {
  return (
    <div className="wrapper about-skill">
      <div className="aboutMe layout">
        <div className="main-title">
          <h1>
            About <span>Me</span>
          </h1>
          <span className="main-title-title-bg">Resume</span>
        </div>
        <div className="leftRight">
          <div className="left">
            <div className="left-side-row left-side-row-1">
              <div className="left-side">
                <h3>
                  97<sup>+</sup>
                </h3>
                <p>
                  completed<span className="">Projects</span>
                </p>
              </div>
              <div className="left-side">
                <h3>
                  97<sup>+</sup>
                </h3>
                <p>
                  completed<span className="">Projects</span>
                </p>
              </div>
            </div>
            <div className="left-side-row left-side-row-2">
              <div className="left-side">
                <h3>
                  97<sup>+</sup>
                </h3>
                <p>
                  completed<span className="">Projects</span>
                </p>
              </div>
              <div className="left-side">
                <h3>
                  97<sup>+</sup>
                </h3>
                <p>
                  completed<span className="">Projects</span>
                </p>
              </div>
            </div>
          </div>

          <div className="right">
            <h2>What I Love To Do</h2>
            <p>
              I'm a Dedicated Frontend Developer, Web Designer, and Javascript
              Enthusiast Focused on Crafting User-friendly Websites With Clean,
              Innovative Designs. With Over 3+ Years of Experience in Cms
              Management, I Excel in Optimizing Website Content and User
              Interfaces to Achieve Business Goals. Proficient in Html5, Css3,
              Bootstrap5, Tailwind, Javascript, and React.js, I Leverage My
              Skills to Streamline Processes and Deliver Seamless Digital
              Experiences. around me.
            </p>
            <button
              className="magnatic"
              onMouseEnter={() => {
                props.one();
              }}
              onMouseOut={() => {
                props.two();
              }}
            >
              <span>Download Cv</span>
              <span>
                <FaDownload />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* ======= my skill ====== */}
      <div className="skills layout">
        <div className="main-title">
          <h1>
            my <span>skills</span>
          </h1>
          <span className="main-title-title-bg">Expertise</span>
        </div>

        <div className="leftRight">
          <div className="left">
            <div className="skills-container">
              <SkillData />
            </div>
          </div>

          <div className="right">
            <img src={manLottie} alt="lottie animation image" />
          </div>
        </div>
      </div>
    </div>
  );
};
