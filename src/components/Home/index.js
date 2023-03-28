import React, { useState, useEffect } from "react";
import HomeImage from "../../asset/images/Home.jpeg";
import "./index.css";
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    console.log(hours, minutes);
    setIsOpen(hours >= 9 && (hours < 18 || (hours === 18 && minutes === 0)));
  }, []);

  return (
    <div className="container-home">
      <img src={HomeImage} alt="home" />
      <div className="text-field">
        <div class="container">
          <div class="box">WELCOME TO PARTURI KKN</div>
          <div class="box">WE ARE</div>
          <div>
            {isOpen ? (
              <div class="box-open">OPEN</div>
            ) : (
              <div class="box-close">CLOSED</div>
            )}
          </div>
          <div class="box">NOW</div>
        </div>
      </div>
    </div>
  );
}
export default Home;
