import React from "react";
import "./printer.css";
import { Link } from "react-router-dom";

export default function PassPrinter() {
  return (
    <>
      <div className="printer-root">
        <div className="header-container">
          <h1 className="printer-header-text">Pass Printer</h1>
          <h2 className="printer-subheader-text">
            All in one security solution for students and teachers.
          </h2>
        </div>
        <div className="text-containers-wrapper">
          <div className="overview-container">
            <h1 className="overview-text">Overview</h1>
            <p className="overview-body-text">
              My Pass Printer is a all in one security solution to be deployed
              in the classroom. Teachers have the ability to print unalterable
              hall passes that require just a signature from the teacher to be
              valid. Built in Java, the teacher uses a input field program that
              is password protected to designate the values on the pass. After
              inputting the fields and printing the pass, the pass data is
              uploaded to a realtime database that can be accessed by authorized
              users if a security concern arises.
            </p>
          </div>

          <div className="why-container">
            <h1 className="why-header-text">Why did I build this?</h1>
            <p className="why-body-text">
              I had a teacher of mine reach out to me regarding the concern of students
              leaving their class and not knowing their whereabouts. After brainstorming, I 
              presented this idea to her and she immediately approved. I wanted my first real project
              to be something of meaning and value. After building this I deployed it in her classroom 
              and it worked sufficiently, solving my teachers trouble.
            </p>
          </div>
        </div>

        <div className="return-home-button">
          <Link className="return-home-link" to={"/"}>
            <h1 className="return-home-text">Reuturn home.</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
