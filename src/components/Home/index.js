import React from "react";
import HomeImage from "../../asset/images/Home.jpeg";
import "./index.css";
export default function Home() {
  return (
    <div className="container-home">
      <img src={HomeImage} alt="home" />
      <div className="text-field">
        <h1>Welcome to my website</h1>
        <p>Learn more about me and my work.</p>
      </div>
    </div>
  );
}
