import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
    const navigator = useNavigate();
  
    return (
    <div className="navbar">
      <ul className="navbar-ul">
        <li className="navbar-link-li">
          <Link className="navbar-link" to="/projects">Projects</Link>
        </li>
        <li className="navbar-link-li">
          <Link className="navbar-link" to="/capabilities">Capabilites</Link>
        </li>
        <li className="navbar-link-li">
          <Link className="navbar-link" to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
