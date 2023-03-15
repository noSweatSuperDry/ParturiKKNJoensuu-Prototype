import React from "react";
import "./index.css";
export default function PriceList() {
  const data = [
    { name: "Hair Cut", Price: "25€" },
    { name: "Beard Trimming", Price: "20€" },
    { name: "Student Discount", Price: "23€" },
  ];
  return (
    <div className="container">
      <h1 className="title">Our Prices</h1>
      {/* your table from here */}
      <div className="App">
        <table>
          <tr>
            <th>Service</th>
            <th>Price</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.Price}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
