import React from "react";
import "./style.css";

export default function Features() {
  return (
    <div id = "features" className="row mt-5 mt-md-5 justify-content-center">
      <div>
        <div className="text-center cFeaturesTitle">FEATURES</div>
      </div>
      <div className="row mt-2 mt-md-4 mb-5 text-center justify-content-between cIconBorder">
        <div className="col-12 col-md-4 mb-5 mb-lg-4 mb-md-0">
          <div>
            <i className="fa-solid fa-clock cIcon"></i>
            <p className="cIconText">Real-time tracking</p>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-5 mb-lg-4 mb-md-0">
          <div>
            <i class="fa-solid fa-chart-pie cIcon"></i>
            <p className="cIconText">Detailed reports</p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div>
            <i class="fa-solid fa-user-group cIcon"></i>
            <p className="cIconText">User-friendly interface</p>
          </div>
        </div>
      </div>
    </div>
  );
}
