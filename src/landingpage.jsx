import React from "react";
import { SkillTile } from "./skill-tile";
import "./landingpage.css";
import "./nameholder.css";
import "./projectholder.css";
import "./projectsfooter.css";
import "./footerbackground.css";
import "./capabilites.css";
import { useNavigate, Link } from "react-router-dom";
/*
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
*/
export default function LandingPage() {
  /*const firebaseConfig = {
    apiKey: "AIzaSyCwVTkU7gYnB2W99cII89qUjHkjVguPM4M",
    authDomain: "dock-461b9.firebaseapp.com",
    projectId: "dock-461b9",
    storageBucket: "dock-461b9.appspot.com",
    messagingSenderId: "602981683316",
    appId: "1:602981683316:web:93090bed5fe74d610d8121",
    measurementId: "G-6NDH22VHCH"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  logEvent(analytics, 'page_view', {})  
*/
  return (
    <>
      <div className="welcome-holder">
        <h1 className="typewriter-welcome">Hello developer.</h1>
        <p className="subtitle">Please, scroll awhile</p>
      </div>

      <div className="about-welcome-divider-holder">
        <div class="about-welcome-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="about-holder">
        <div className="name-headers">
          <h1 className="name-header">I am Gage</h1>
          <h2 className="name-subheader">A 17 year old developer</h2>
        </div>
      </div>

      <div className="about-skills-divider-holder">
        <div className="about-skills-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="skills-holder">
        <div className="skills-header-text-holder">
          <h1 className="skills-header-text">Capabilites</h1>
        </div>

        <div className="skills-tiles-holder">
          <div className="skill-tile">
            <SkillTile link={"https://i.imgur.com/PZQAryI.png"} size={200} />
          </div>
          <div className="skill-tile">
            <SkillTile link={"https://i.imgur.com/OTjuOme.png"} size={200} />
          </div>
          <div className="skill-tile">
            <SkillTile link={"https://i.imgur.com/OTjuOme.png"} size={200} />
          </div>
        </div>
      </div>

      <div className="skills-projects-divider-holder">
        <div class="skills-projects-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="projects-holder">
        <h1 className="projects-header">My Projects</h1>

        <div className="gallery">
          <div className="printer-svg gallery-tile">
            <Link to="/pass-printer">
              <img
                src="https://gdurl.com/txRK"
                alt="epsonprinter"
                className="gallery-item"
              />
            </Link>
          </div>
          <div className="dock-svg gallery-tile">
            <Link to="/dock">
              <img src="https://gdurl.com/DRlLm/" className="gallery-item" />
            </Link>
          </div>
        </div>
        <h1 className="project-footer">And more to come...</h1>
      </div>
      <div className="projects-footer-divider-holder">
        <div class="projects-footer-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="footer">
        <div className="footer-content">
          <div className="lets-talk">
            <h1>LET'S TALK -&gt;</h1>
          </div>

          <div className="info-card">
            <h1>Gage Willette</h1>
            <h2>gagew0513@gmail.com</h2>
            <h2>941-275-9989</h2>
          </div>
        </div>

        <div className="footer-background">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}
