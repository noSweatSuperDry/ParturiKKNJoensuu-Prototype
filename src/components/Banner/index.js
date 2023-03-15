import React from "react";
import BannerImage from "../../asset/images/Banner.jpg";
import "./index.css";
export default function Banner() {
  return (
    <div className="banner-container">
      <img src={BannerImage} alt="Banner" />
    </div>
  );
}
