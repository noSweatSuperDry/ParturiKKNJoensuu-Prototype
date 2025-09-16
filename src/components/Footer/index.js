import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <span className="footer__title">Parturi KKN</span>
          <span className="footer__location">Joensuu</span>
        </div>
        <div className="footer__details">
          <span>Torikatu 23, 80100 Joensuu</span>
          <a href="tel:+358468456395">046 8456395</a>
        </div>
        <div className="footer__social">
          <a href="https://www.facebook.com/Parturikkn/" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <span className="divider" aria-hidden="true" />
          <a href="https://www.instagram.com/parturi_kkn/?hl=en" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <small className="footer__copyright">© {new Date().getFullYear()} Parturi KKN. All rights reserved.</small>
    </footer>
  );
}
