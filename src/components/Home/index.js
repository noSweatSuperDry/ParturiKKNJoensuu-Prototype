import React, { useEffect, useState } from "react";
import HomeImage from "../../asset/images/Home.jpeg";
import "./index.css";

const HOURS_SCHEDULE = {
  0: null, // Sunday
  1: { open: 9, close: 19 },
  2: { open: 9, close: 19 },
  3: { open: 9, close: 19 },
  4: { open: 9, close: 19 },
  5: { open: 9, close: 19 },
  6: { open: 9, close: 17 },
};

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const formatTime = (hour) => `${hour.toString().padStart(2, "0")}:00`;

const findNextOpening = (currentDay) => {
  for (let offset = 1; offset <= 7; offset += 1) {
    const dayIndex = (currentDay + offset) % 7;
    const window = HOURS_SCHEDULE[dayIndex];
    if (window) {
      return {
        dayName: DAY_NAMES[dayIndex],
        opensAt: formatTime(window.open),
      };
    }
  }
  return null;
};

function Home() {
  const [openStatus, setOpenStatus] = useState({
    isOpen: false,
    headline: "",
    detail: "",
  });

  useEffect(() => {
    const now = new Date();
    const dayIndex = now.getDay();
    const minutesNow = now.getHours() * 60 + now.getMinutes();
    const todayWindow = HOURS_SCHEDULE[dayIndex];

    if (todayWindow) {
      const openMinutes = todayWindow.open * 60;
      const closeMinutes = todayWindow.close * 60;

      if (minutesNow >= openMinutes && minutesNow < closeMinutes) {
        setOpenStatus({
          isOpen: true,
          headline: "Open now",
          detail: `Closes today at ${formatTime(todayWindow.close)}`,
        });
      } else if (minutesNow < openMinutes) {
        setOpenStatus({
          isOpen: false,
          headline: "Closed",
          detail: `Opens today at ${formatTime(todayWindow.open)}`,
        });
      } else {
        const nextOpening = findNextOpening(dayIndex);
        setOpenStatus({
          isOpen: false,
          headline: "Closed",
          detail: nextOpening
            ? `Opens ${nextOpening.dayName} at ${nextOpening.opensAt}`
            : "",
        });
      }
    } else {
      const nextOpening = findNextOpening(dayIndex);
      setOpenStatus({
        isOpen: false,
        headline: "Closed",
        detail: nextOpening
          ? `Opens ${nextOpening.dayName} at ${nextOpening.opensAt}`
          : "",
      });
    }
  }, []);

  return (
    <section className="hero section-card">
      <img className="section-card__backdrop hero__image" src={HomeImage} alt="Barber working with client" />
      <div className="section-card__overlay hero__overlay" />
      <div className="section-card__content hero__content">
        <span className="eyebrow">Welcome to Joensuu</span>
        <h1 className="hero__title">Parturi KKN</h1>
        <p className="hero__description">
          Classic barber craftsmanship with contemporary style. Step into a relaxed atmosphere where sharp fades,
          clean shaves, and great conversations come standard.
        </p>

        <div className="hero__status">
          <span className={`pill ${openStatus.isOpen ? "pill--success" : "pill--danger"}`}>
            <span className={`status-dot ${openStatus.isOpen ? "status-dot--open" : "status-dot--closed"}`} />
            {openStatus.headline}
          </span>
          <span className="hero__status-detail">{openStatus.detail}</span>
        </div>

        <div className="hero__actions">
          <a
            className="btn-primary hero__cta"
            href="https://slotti.fi/booking/parturikkn/"
            target="_blank"
            rel="noreferrer"
          >
            Book Appointment / Varaa aika
          </a>
          <a className="hero__cta-secondary" href="tel:+358468456395">
            Call us 046 8456395
          </a>
        </div>

        <div className="hero__hours-card">
          <div className="hero__hours-heading">Opening Hours</div>
          <ul className="hero__hours-list">
            <li>
              <span>Mon – Fri</span>
              <span>09:00 – 19:00</span>
            </li>
            <li>
              <span>Saturday</span>
              <span>09:00 – 17:00</span>
            </li>
            <li>
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
          <p className="hero__walkins">Walk-ins welcome daily – just drop by.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
