import React from "react";
import Navbar from "./navbar";
import "./aboutme.css"

export default function AboutMe() {
  return (
    <div className="about-me-root">
      <div className="about-me-picture-wrapper">
        <Navbar />
        <div className="about-me-picture-holder">
          <img src="src\assets\behindpic-trans.png" className="about-me-img" /> 
          <div className="about-img-centered">
            <h1 className="about-img-centered-text">Gage Willette</h1>
            <h2 className="about-img-centered-subtxt">17 Year Old Developer</h2>
          </div>
        </div>
        </div>
        <div className="about-me-txt-wrapper">
          <div className="about-me-header">
            <h1 className="about-me-header-txt">About Me</h1>
          </div>
          <div className="about-me-body-text">
            <p>Hello! I am Gage. I am a 17 year old developer,</p>
            <p>and have been teaching my self a variety of technologies</p>
            <p>varying from game development with the Unity Engine to</p>
            <p>full stack web development.</p>
          </div>


        </div>


    </div>
  );
}
