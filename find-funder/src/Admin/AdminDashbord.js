import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import BaseURL from "../AxiosFunction";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  CardHeader,
  CardBody,
  Col,
  Row,
} from "reactstrap";
import { Bar } from "react-chartjs-2";

export default function () {

  const [user, setuser] = useState([]);
  const [investor, setInvestor] = useState([]);
  const [proposal, setProposal] = useState([]);
  const [investment, setInvestment] = useState([]);
  const arr = [];
  const invest = [];
  {investment?.map((item) =>

    arr.push(item.creationOn?.slice(0, item.creationOn.indexOf("T")))
  )}
  {investment?.map((item) => invest.push(item.amount))}

  console.log("userdata", user);
  console.log("investordata", investor);
  console.log("proposaldata", proposal);
  console.log("investmentdata", investment);

  useEffect(() => {
    userData();

    setTimeout(() => {
      investorData();
    }, 100);

    setTimeout(() => {
      companyData();
    }, 200);

    setTimeout(() => {
      investmentData();
    }, 300);
  }, []);
  const userData = async () => {
    try {
      const response = await BaseURL.get("/api/Admin/Entrepreneur");
      console.log("entrepreneur", response);
      setuser(response.data.items);
    } catch (error) {
      console.log("error", error);
    }
  };
  const investorData = async () => {
    try {
      const response = await BaseURL.get("/api/Admin/Investor");
      console.log("investor", response);
      setInvestor(response.data.items);
    } catch (error) {
      console.log("error", error);
    }
  };
  const investmentData = async () => {
    try {
      const response = await BaseURL.get("/api/Admin/Investment");
      console.log("investment", response);
      setInvestment(response.data.items);
    } catch (error) {
      console.log("error", error);
    }
  };
  const companyData = async () => {
    try {
      const response = await BaseURL.get("/api/Admin/CompanyProposal");
      console.log("Companydata", response);
      setProposal(response.data.items);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="main">
        <div>
          <Row>
            <Col md={3}>
              <Card
                className="my-2"
                color="light"
                style={{
                  width: "15rem",
                }}
              >
                <CardHeader>
                  <b> Entrepreneur</b>
                </CardHeader>
                <CardBody>
                  <CardTitle tag="h5">{user?.length}</CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card
                className="my-2"
                color="light"
                style={{
                  width: "15rem",
                }}
              >
                <CardHeader>
                  <b>Investor</b>
                </CardHeader>
                <CardBody>
                  <CardTitle tag="h5">{investor?.length}</CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card
                className="my-2"
                color="light"
                style={{
                  width: "15rem",
                }}
              >
                <CardHeader>
                  <b>Company Proposal</b>
                </CardHeader>
                <CardBody>
                  <CardTitle tag="h5">{proposal?.length}</CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card
                className="my-2"
                color="light"
                style={{
                  width: "15rem",
                }}
              >
                <CardHeader>
                  <b> Total Investment</b>{" "}
                </CardHeader>
                <CardBody>
                  <CardTitle tag="h5">{investment?.length}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <div>
         
          <Bar
            data={{
              labels: arr,
              datasets: [
                {
                  label: "Investment",
                  data: invest,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
