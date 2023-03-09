import React from "react";
import ReactDOM from "react-dom/client";

import Footer from "./components/Footer";
import PageRoute from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageRoute />
    <Footer />
  </React.StrictMode>
);
