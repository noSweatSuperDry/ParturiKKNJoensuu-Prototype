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
      <div className="box">WELCOME TO </div>
      <div className="box">PARTURI KKN</div>
        <div className="open-close">
          {isOpen ? (
            <div className="box-open">OPEN</div>
          ) : (
            <div className="box-close">CLOSED</div>
          )}
        </div>
        <div className="box">NOW</div>
        <div> </div>
      </div>
    </div>
  );
}
export default Home;
