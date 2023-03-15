import React from "react";
import "./index.css";
import PricePic from "../../asset/images/Price.jpg";
import Card from "react-bootstrap/Card";
import studentCard from "../../asset/images/studentcard.jpg";
import hairCard from "../../asset/images/haircard.jpg";
import beardCard from "../../asset/images/beardcard.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export default function PriceList() {
  return (
    <div>
      <img src={PricePic} alt="home" />
      <div className="text-priceList">
        <h1 className="title">Our Prices</h1>
        {/* your table from here */}
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={hairCard} />
              <Card.Body>
                <Card.Title>25 €</Card.Title>
                <Card.Text>Hair Cut</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={beardCard} />
              <Card.Body>
                <Card.Title>20 €</Card.Title>
                <Card.Text>Beard Trimming</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={studentCard} />
              <Card.Body>
                <Card.Title>10% Discount</Card.Title>
                <Card.Text>Student Price</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
