import React from "react";
import HomeImage from "../../asset/images/AboutUs.jpeg";
import "./index.css";

export default function AboutUs() {
  return (
    <section className="about section-card">
      <img className="section-card__backdrop about__image" src={HomeImage} alt="Interior of Parturi KKN barbershop" />
      <div className="section-card__overlay about__overlay" />
      <div className="section-card__content about__content">
        <div className="about__grid">
          <div className="about__story">
            <span className="eyebrow">About Us</span>
            <h2>More than a fresh cut</h2>
            <p>
              Parturi KKN has been part of Joensuu's city centre for years. Our barbers blend international
              experience with Finnish craftsmanship to deliver cuts, fades, and shaves that feel tailor made.
            </p>
            <p>
              From the first consultation to the finishing product, we focus on the details that make you look and
              feel sharp. Relax with good music, good conversation, and a team that knows barbering inside out.
            </p>
          </div>

          <div className="about__contact">
            <div className="contact-card">
              <h3>Visit</h3>
              <p>Torikatu 23, 80100 Joensuu</p>
            </div>
            <div className="contact-card">
              <h3>Call</h3>
              <a href="tel:+358468456395">046 8456395</a>
            </div>
            <div className="contact-card contact-card--social">
              <h3>Follow</h3>
              <div className="contact-card__links">
                <a href="https://www.facebook.com/Parturikkn/" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a href="https://www.instagram.com/parturi_kkn/?hl=en" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
