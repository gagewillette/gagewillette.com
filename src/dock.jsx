import React from "react";
import "./dock.css";

export default function Dock() {
  return (
    <>
      <div className="dock-root">
        <div className="header-container">
          <h1 className="dock-header-text">Dock</h1>
          <h2 className="dock-subheader-text">Boating, Simplified</h2>
        </div>
        <div className="text-containers-wrapper">
          <div className="overview-container">
            <h1 className="overview-text">Overview</h1>
            <p className="overview-body-text">
              Dock is a mobile app developed to revolutionze the boat marina
              process. My app is designed to be highly user-friendly and elegant
              to conform to the broad age range of boat owners. Using the app,
              any customer can schedule many services at their home marina. Want
              your boat in the water at 4:30? No problem. Ask them to load your
              boat with ice while you're at it! Users have the ability to
              schedule boat drops, cleaning rack time, refueling, trailering,
              etc. My app is designed to be highly user-friendly and elegant to
              conform to the broad age range of boat owners.
            </p>
          </div>

          <div className="why-container">
            <h1 className="why-header-text">Why did I build this?</h1>
            <p className="why-body-text">
              Being on the water is in my blood. Everything about the boating
              experience is pleasurable besides the procedure of scheduling your
              boat to be put in the water at the marina. The entire process is
              slow, outdated, and requires marina staff personel to be alert at
              all times to take your call.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
