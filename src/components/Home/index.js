import React, { useState, useEffect } from "react";
import HomeImage from "../../asset/images/Home.jpeg";
import "./index.css";
function Home() {
  const [isOpenWeekTime, setIsOpenWeekTime] = useState(false);
  const [isOpenWeekendTime, setIsOpenWeekendTime] = useState(false);
  const [isShopDay, setShopday] = useState(false);

  
  
 
  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const today = new Date();
  const shopDay = today.toLocaleString('default', { weekday: 'long' });
    console.log(hours, minutes);
    setIsOpenWeekTime(hours >= 9 && (hours < 19 || (hours === 19 && minutes === 0)));
    setIsOpenWeekendTime(hours >= 9 && (hours < 19 || (hours === 19 && minutes === 0)));
    if (shopDay === 'Monday' || shopDay === 'Tuesday' || shopDay === 'Wednesday' || shopDay === 'Thursday' || shopDay === 'Friday' || shopDay === 'Saturday') {
      setShopday(true);
    }
  }, []);

  return (
    <div className="container-home">
      <img src={HomeImage} alt="home" />
      <div className="text-field">
      <div className="box">WELCOME TO </div>
      <div className="boxname">PARTURI KKN</div>
        {isShopDay ? (<div className="open-close">
          {isOpenWeekTime ? (
            <div className="box-open">OPEN</div>
          ) : (
            <div className="box-close">CLOSED</div>
          )}
        </div>):(<div className="open-close">
          {isOpenWeekendTime ? (
            <div className="box-open">OPEN</div>
          ) : (
            <div className="box-close">CLOSED</div>
          )}
        </div>)}
        <div style={{marginTop:'0.3cm'}}>Monday - Friday : 9AM - 7PM</div>
        <div style={{marginBottom:'0.3cm'}}>Saturday : 9AM - 5PM</div>
        <div className="box">CALL US</div>
        <div className="boxphoneno"> 046 8456395</div>
        <div className="box">COME WITH OR WITHOUT ANY APPOINTMENT!</div>
       
        <a className="box-appointment" style={{width:300, backgroundColor:"red"}}
   href="https://slotti.fi/booking/parturikkn/">
    Book Appointment / Varaa aika
</a>
      </div>
    </div>
  );
}
export default Home;
