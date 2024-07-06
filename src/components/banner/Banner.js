import React from "react";
import "./banner.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Banner = (props) => {
  // const root = document.querySelector(":root").style.setProperty("--PrimaryColor","rgb(255, 255, 255)")
  // console.log("root",root)
  return (
    <div className="banner">
      <div className="left"></div>
      <div className="right">
        <h1>
          <span>I'M Pawan Nagar</span>
          <span>Web Developer</span>
        </h1>
        <p>
          Frontend Developer and Web Designer with 3+ years of CMS management
          experience. Proficient in HTML5, CSS3, Bootstrap5, Tailwind,
          JavaScript, and React.js for creating innovative, user-friendly
          websites.
        </p>
        <Link to="/about">
          <button
            className="magnatic"
            onMouseEnter={() => {
              props.one();
            }}
            onMouseOut={() => {
              props.two();
            }}
          >
            <span>More About Me</span>
            <span>
              <FaArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};
