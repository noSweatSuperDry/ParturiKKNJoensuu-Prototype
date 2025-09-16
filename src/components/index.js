import Tab from "react-bootstrap/Tab";
import { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/index";
import PriceList from "./PriceList/index";
import AboutUs from "./AboutUs/index";
import Appointment from "./Appointment/index";

function App() {
  const [key, setKey] = useState("home");

  return (
    <main className="site-main">
      <Tabs
        id="site-sections"
        className="site-tabs"
        justify
        activeKey={key}
        onSelect={(k) => k && setKey(k)}
      >
        <Tab eventKey="home" title="Home">
          <Home />
        </Tab>
        <Tab eventKey="appointment" title="Appointment">
          <Appointment />
        </Tab>
        <Tab eventKey="Price" title="Price List">
          <PriceList />
        </Tab>
        <Tab eventKey="contact" title="About Us">
          <AboutUs />
        </Tab>
      </Tabs>
    </main>
  );
}

export default App;
