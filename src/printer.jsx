import React from "react";
import "./printer.css";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="why-container">
          <h1 className="why-header-text">Why did I build this?</h1>
          <p className="why-body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}
