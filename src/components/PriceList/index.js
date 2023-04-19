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
        <div className="bigText">Hair Cut</div>
        <img src={hairCard} alt="hair"></img>
        <div className="cardPrice">25€</div>
       
        </div>
       {/* card design */}
       <div className="xCard">
       <div className="bigText">Beard Trimming</div>
        <img src={beardCard} alt="beard"></img>
        <div className="cardPrice">20€</div>
        
        </div>
         {/* card design */}
         <div className="xCard">
         <div className="bigText">Student Hair Cut</div>
        <img src={studentCard} alt="student"></img>
        <div className="cardPrice">23€</div>
       
        </div>
      </div>
    </div>
  );
}
