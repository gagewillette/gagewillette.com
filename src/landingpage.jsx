import React from "react";
import Navbar from "./navbar";
import "./landingpage.css"

export default function LandingPage() {
  
  return <>
    <Navbar className="navbar" />
    <div className="welcome-holder">
    <h1 className="typewriter-welcome">Hello developer.</h1>
    <p className="subtitle">Please, scroll awhile</p>
    </div>
  </>
}
