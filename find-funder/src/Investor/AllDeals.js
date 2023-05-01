import React, { useEffect, useState } from "react";
import axios from "axios";
import InvestorHeader from "./InvestorHeader";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Container,
  Badge
} from "reactstrap";
import BaseURL from "../AxiosFunction";
import Footer from "../Component/Footer";

export default function AllDeals() {
  const [name, setName] = useState([]);
  useEffect(() => {
    console.log("useEffect called");
    const fetchData = async () => {
      try {
        const response = await BaseURL.get("/api/CompanyProposal");
        console.log("result", response);
        setName(response.data.items);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  console.log("name", name);

  return (
    <div>
      <InvestorHeader />
      <div className="App-deal">
        <div className="button">
          <Link to="/alldeals" className="menue">
          <Button color="primary">
              ALL
              </Button>
          </Link>
          <Link to="/publicdeal" className="menue">
          <Button color="primary">
              Public
              </Button>
          </Link>
          <Link to="/privatedeal" className="menue">
          <Button color="primary">
              Private
              </Button>
          </Link>
        </div>

        <div>
          <Container>
            <Row>
              {name.map((item) => {
                return (
                  <Col md={4}>
                    <Card className="my-2" style={{border: "1.5px solid black"}}>
                    <Badge style={{width:"50px"}} color="primary">{item.isPublic?"Public":"Private"}</Badge>
                      <img src={item.logo} alt="Card image cap" style={{ height: 150, width: 247,borderRadius: "2.5%"}} />
                      <CardBody>
                        <CardTitle tag="h6">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</CardTitle>
                        <CardText style={{ textAlign: "left" }}>
                          {item.description.substring(0, 40).concat("...")}
                        </CardText>
                        <CardText >
                          <Row>
                            <Col>
                          <p style={{ textAlign: "left" }}>
                            Equity
                            <br />
                            {item.equity}%
                          </p>
                          </Col>
                          <Col>
                          <p style={{ textAlign: "right" }}>
                            Close in
                            <br />
                           {(Math.abs(new Date().getTime()-new Date(item.endDate).getTime())/(1000 * 3600 * 24)).toFixed(0)==0?"Last day ":(Math.abs(new Date().getTime()-new Date(item.endDate).getTime())/(1000 * 3600 * 24)).toFixed(0)+"days"}
                       
                          </p>
                          </Col>
                          </Row>
                        </CardText>

                        <Link to={`showcompanydetail/${item.id}`}>
                          <Button color="primary">Read More</Button>
                        </Link>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}


            </Row>
          </Container>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
