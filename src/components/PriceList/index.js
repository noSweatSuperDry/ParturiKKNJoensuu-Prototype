import React from "react";
import "./index.css";
import PricePic from "../../asset/images/Price.jpg";
import Card from "react-bootstrap/Card";
import studentCard from "../../asset/images/studentcard.jpg";
import hairCard from "../../asset/images/haircard.jpg";
import beardCard from "../../asset/images/beardcard.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export default function PriceList() {
  return (
    <div className="container-priceList">
      <img src={PricePic} alt="home" />
      <div className="text-priceList">
        <div className="cardPrice"></div>
        <div className="cardPrice"></div>
        <div className="cardPrice"></div>
      </div>
    </div>
  );
}
