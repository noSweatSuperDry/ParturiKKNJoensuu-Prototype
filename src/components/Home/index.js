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
      <div className="boxname">PARTURI KKN</div>
        <div className="open-close">
          {isOpen ? (
            <div className="box-open">OPEN</div>
          ) : (
            <div className="box-close">CLOSED</div>
          )}
        </div>
        <div>Monday - Friday : 9AM - 7PM</div>
        <div>Saturday : 9AM - 5PM</div>
        <div className="box">YOU ARE WELCOME ANYTIME TO OUR SHOP NOW</div>
        <div className="box">CALL US</div>
        <div className="boxphoneno"> 046 8456395</div>
        <div className="box">Get Your Hair Cut With or Without any appointment.</div>
       
        <a className="box-open" style={{width:300, backgroundColor:"red"}}
   href="https://slotti.fi/booking/ESIMERKKI">
    Book Appointment / Varaa aika
</a>
      </div>
    </div>
  );
}
export default Home;
