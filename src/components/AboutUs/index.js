import React from "react";
import HomeImage from "../../asset/images/AboutUs.jpeg";
import "./index.css";
export default function AboutUs() {
  return (
    <div className="container-aboutUs">
      <img src={HomeImage} alt="aboutUs" />
      <div className="text-aboutUs">
        <h1>About Us</h1>
        <p>
          Your go-to barber shop in Joensuu, Finland! Our team of experienced
          and skilled barbers is dedicated to providing our clients with
          top-notch grooming services in a warm and inviting atmosphere. We strive to create a welcoming and
          comfortable environment where you can relax and enjoy your grooming
          session. So why wait? Book your appointment today and let us take care
          of all your grooming needs. We look forward to seeing you soon!
        </p>
      </div>
      <div className="text-aboutUs">
        <h2>Contact</h2>
      </div>
    </div>
  );
}
