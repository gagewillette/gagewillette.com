import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
    const navigator = useNavigate();
  
    return (
    <div className="navbar">
      <h1>Users</h1>
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
}
