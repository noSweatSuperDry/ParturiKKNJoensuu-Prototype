import React from "react";
import HomeImage from "../../asset/images/AboutUs.jpeg";
import "./index.css";
export default function AboutUs() {
  return (
    <div className="container-aboutUs">
      <img src={HomeImage} alt="aboutUs" />
      <div className="text-aboutUs">
        <h1>About Us</h1>
        <p>Learn more about me and my work.</p>
      </div>
    </div>
  );
}
