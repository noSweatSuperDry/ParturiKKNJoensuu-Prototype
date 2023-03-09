import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Banner />
    <App />
    <Footer />
  </React.StrictMode>
);
