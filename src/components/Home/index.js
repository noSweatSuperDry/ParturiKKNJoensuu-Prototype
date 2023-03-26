import React from "react";
import HomeImage from "../../asset/images/Home.jpeg";
import "./index.css";
export default function Home() {
  return (
    <div className="container-home">
      <img src={HomeImage} alt="home" />
      <div className="text-field">
        <div class="container">
          <div class="box">WELCOME</div>
          <div class="box">TO</div>
          <div class="box">PARTURI KKN</div>
        </div>
      </div>
    </div>
  );
}
