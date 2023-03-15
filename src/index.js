import React from "react";
import ReactDOM from "react-dom/client";

import Footer from "./components/Footer";
import App from "./components";
import Banner from "./components/Banner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Banner />
    <App />
    <Footer />
  </React.StrictMode>
);
