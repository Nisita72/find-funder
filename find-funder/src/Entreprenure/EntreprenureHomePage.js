import React from "react";
import { Container } from "reactstrap";
import EntreprenureHeader from "./EntreprenureHeader";
import x from "../images/founder1.png";
import y from "../images/founder2.png";
import z from "../images/investor2.png";
import { Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
export default function EntreprenureHomePage() {
  return (
    <div>
      <EntreprenureHeader />
      <div className="App">
        <Row xs="2" className="align-items-center">
          <Col className="class-col">
            <h4 style={{ textAlign: "left" }}>
              <b>Give a Digital Transformation Pitch</b>
            </h4>
            <p style={{ textAlign: "left" }}>
              {" "}
              Digital Pitch is a quarterly pitch initiative that allows creators
              to connect the best new ideas with the global content community.
            </p>
          </Col>
          <Col>
            <img src={x} className="img-fluid " alt="home img" />
          </Col>
        </Row>
        <br />
        <Row xs="2" className="align-items-center">
          <Col>
            <img src={y} className="img-fluid " alt="home img" />
          </Col>
          <Col className="class-col">
            <h4 style={{ textAlign: "left" }}>
              <b>Make a Bussiness plan</b>
            </h4>
            <p style={{ textAlign: "left" }}>
              A business plan is an essential written document that provides a
              description and overview of your company's future.
            </p>
          </Col>
        </Row>
        <br />
        <Row xs="2" className="align-items-center">
          <Col className="class-col">
            <h4 style={{ textAlign: "left" }}>
              <b>Forget paperWork</b>
            </h4>
            <p style={{ textAlign: "left" }}>
              Improved process productivity, the need to quickly find and share
              documents, and the demand for any time, anywhere access to
              documents.
            </p>
          </Col>
          <Col>
            <img src={z} className="img-fluid " alt="home img" />
          </Col>
        </Row>
        <br />
        <Row>
          <h4>
            <b>Convert your community into capital</b>
          </h4>
        </Row>
        <br />
        <Row>
          <Link to="/companydetails">
            <Button color="primary">Apply To Raise</Button>
          </Link>
        </Row>
        <br />
      </div>
      <Footer />
    </div>
  );
}
