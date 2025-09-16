import React from "react";
import "./index.css";

export default function Appointment() {
  return (
    <section className="appointment">
      <div className="appointment__intro">
        <span className="eyebrow">Book Online</span>
        <h2>Reserve your next visit</h2>
        <p>
          Secure your chair in seconds through our Slotti booking portal. Choose a barber, pick the service that fits,
          and find a time that works for you. Prefer to drop by? Walk-ins are still welcome every day.
        </p>
      </div>
      <div className="appointment__frame">
        <iframe title="Parturi KKN appointment booking" src="https://slotti.fi/booking/parturikkn/" loading="lazy" />
      </div>
    </section>
  );
}
