import React from "react";
import "./index.css";
import PricePic from "../../asset/images/Price.jpg";
import studentCard from "../../asset/images/studentcard.jpg";
import hairCard from "../../asset/images/haircard.jpg";
import beardCard from "../../asset/images/beardcard.jpg";

export default function PriceList() {
  return (
    <div className="container-priceList">
      <img src={PricePic} alt="home" />
      <div className="text-priceList">
      {/* card design */}
        <div className="xCard">
        <img src={hairCard} alt="hair"></img>
        <div className="cardPrice">25€</div>
        <p className="bigText">Hair Cut</p>
         </div>
      
      </div>
    </div>
  );
}
