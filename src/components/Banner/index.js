import React from "react";
import BannerImage from "../../asset/images/Banner.jpg";
import "./index.css";

export default function Banner() {
  return (
    <header className="banner">
      <img className="banner__image" src={BannerImage} alt="Vintage barber tools on a workbench" />
      <div className="banner__overlay" />
      <div className="banner__content">
        <span className="banner__eyebrow">Barbershop • Joensuu</span>
        <h1 className="banner__title">Parturi KKN</h1>
        <p className="banner__subtitle">Sharp cuts, relaxed atmosphere, and service tailored to you.</p>
      </div>
    </header>
  );
}
