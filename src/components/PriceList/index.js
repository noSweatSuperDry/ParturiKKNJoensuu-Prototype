import React from "react";
import "./index.css";
import PricePic from "../../asset/images/Price.jpg";
import studentCard from "../../asset/images/studentcard.jpg";
import hairCard from "../../asset/images/haircard.jpg";
import beardCard from "../../asset/images/beardcard.jpg";

const services = [
  {
    title: "Gentlemen's Cut",
    price: "25€",
    image: hairCard,
    description: "Tailored scissor and clipper work finished with premium styling products.",
  },
  {
    title: "Beard Detailing",
    price: "20€",
    image: beardCard,
    description: "Line-ups, fades, and hot-towel shaves for a sharp, refined beard.",
  },
  {
    title: "Student Cut",
    price: "23€",
    image: studentCard,
    description: "Same meticulous attention for students – remember your student ID.",
  },
];

export default function PriceList() {
  return (
    <section className="pricing section-card">
      <img className="section-card__backdrop pricing__image" src={PricePic} alt="Scissors and comb on a barber workstation" />
      <div className="section-card__overlay pricing__overlay" />
      <div className="section-card__content pricing__content">
        <div className="pricing__intro">
          <span className="eyebrow">Services & Pricing</span>
          <h2>Crafted looks, transparent pricing</h2>
          <p>
            Every visit includes a consultation, precise styling, and finishing touches tailored to your hair and
            beard. Choose the service that suits you best or ask our barbers for a recommendation.
          </p>
        </div>

        <div className="pricing__grid">
          {services.map((service) => (
            <article className="price-card" key={service.title}>
              <div className="price-card__visual">
                <img src={service.image} alt={`${service.title} illustration`} />
              </div>
              <div className="price-card__body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="price-card__price">{service.price}</div>
            </article>
          ))}
        </div>

        <p className="pricing__note">
          Need something specific? Let us know – skin fades, crew cuts, and kids trims are all available on request.
        </p>
      </div>
    </section>
  );
}
