import Tab from "react-bootstrap/Tab";
import { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/index";
import PriceList from "./PriceList/index";
import AboutUs from "./AboutUs/index";
function PageRoute() {
  const [key, setKey] = useState("home");
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      style={StyleSheet.Tab}
      className="mb-3"
      fill
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab style={StyleSheet.InsideTab} eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="Price" title="Price List">
        <PriceList />
      </Tab>
      <Tab eventKey="contact" title="About Us">
        <AboutUs />
      </Tab>
    </Tabs>
  );
}

export default PageRoute;

const StyleSheet = {
  Tab: {
    backgroundColor: "pink",
  },
};
