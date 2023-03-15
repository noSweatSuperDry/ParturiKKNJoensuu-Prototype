import React from "react";

export default function Home() {
  const divStyle = {
    backgroundImage: 'url("../../asset/images/Home.jpeg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <div className="container">
      <div style={divStyle}>
        <div>Home</div>
      </div>
    </div>
  );
}
