import React from "react";
import HomeImage from "../../asset/images/Home.jpeg";
import "./index.css";
export default function Home() {
  return (
    <div className="container-home">
      <img src={HomeImage} alt="home" />
      <div className="text-field">
        <h1>Welcome to Parturi KKN</h1>
        <p>
          Your go-to barber shop in Joensuu, Finland! Our team of experienced
          and skilled barbers is dedicated to providing our clients with
          top-notch grooming services in a warm and inviting atmosphere. At
          Parturi KKN, we understand that every client is unique, and we take
          the time to listen to your needs and preferences to ensure that you
          leave our shop feeling confident and satisfied with your new look.
          Whether you're looking for a classic haircut or a modern style, we've
          got you covered. Our barbers are passionate about their craft and stay
          up-to-date with the latest trends and techniques in men's grooming. We
          use only the highest quality products and tools to ensure that you get
          the best possible results. In addition to haircuts, we offer a range
          of other services to keep you looking and feeling your best, including
          beard trims, shaves, and facial treatments. We also offer grooming
          tips and advice to help you maintain your look in between visits. At
          Parturi KKN, we believe that a great haircut is more than just a
          service – it's an experience. We strive to create a welcoming and
          comfortable environment where you can relax and enjoy your grooming
          session. So why wait? Book your appointment today and let us take care
          of all your grooming needs. We look forward to seeing you soon!
        </p>
      </div>
    </div>
  );
}
