import React from "react";
import "./style.css";

export default function index() {
  return (
    <div id = "about" className="row d-flex flex-column text-center container-fluid caboutSection">
      <div className="col-12">
        <div>
          <h2 className="cSectionTitle">ABOUT</h2>
        </div>
      </div>
      <div className="col-12 mt-0 mt-lg-3">
        <div>
          <h2 className="text-lg-start descriptionText">
            QuickTrack is a simple yet powerful time-tracking app designed for
            busy professionals. Key features include real-time tracking,
            detailed reports, and a user-friendly interface.
          </h2>
        </div>
      </div>
    </div>
  );
}
