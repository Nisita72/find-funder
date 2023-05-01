import React, { useState } from "react";
import x from "../images/Home1.png";
import y from "../images/entreprenure1.png";
import z from "../images/entreprenure2.png";
import p from "../images/invester1.png";
import q from "../images/invester2.png";
import { useLocation, useNavigate } from "react-router-dom";
import Header from './Header'
import { Col,Row } from "reactstrap";
import {Button} from 'reactstrap'
import { Link } from "react-router-dom";
import Footer from "./Footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <div className="App" >
      <Row xs="2"  className="align-items-center">
    <Col className="class-col" >  
    <h4 style={{textAlign:"left"  }}><b>Grow your wealth with higher returns</b></h4>
    <p style={{textAlign:"left"}}>Startup Fundraising Platform
Start and manage a professional fundraise to attract quality accredited investors.Helping Investors discover the Startups solving complex problems and attracting them as per matching Fund Portfolio </p>
    </Col>
    <Col >
    <img src={x} className="img-fluid " alt="home img" />
    </Col>
  </Row>
  <br/>
  <Row  className="align-items-center"><h3><b><ul>For Entreprenure</ul></b></h3></Row>
  <Row xs="2"  className="align-items-center">
    <Col className="class-col" >  
    <img src={y} className="img-fluid " alt="home img" />
    </Col>
    <Col >
    <h4 style={{textAlign:"left"  }}><b>Digital fundraising</b></h4>
    <p style={{textAlign:"left"}}>fundraising is an ongoing process to start with online outreach techniques using websites, emails, and social media </p>
    </Col>
  </Row>
 <br/>
  <Row xs="2"  className="align-items-center">
  <Col >
    <h4 style={{textAlign:"left"  }}><b>Getting mentorship</b></h4>
    <p style={{textAlign:"left"}}>Mentorship, Advisory, assistance, Resilience and Growth Portal for startups is a one-stop platform to facilitation and guidance across all sectors, functions, stages, and geographies.</p>
    </Col>
    <Col className="class-col" >  
    <img src={z} className="img-fluid " alt="home img" />
    </Col>
    
  </Row>
  <br/>
  <Row  className="align-items-center"><h3><b><ul> For Investor</ul></b></h3></Row>
  <Row xs="2"  className="align-items-center">
  <Col >
    <img src={p} className="img-fluid " alt="home img" />
    <h5 style={{textAlign:"center"  }}><b>Invest Instantly</b></h5>
    <p style={{textAlign:"left"}}></p>
    </Col>
    <Col className="class-col" >  
    <img src={q} className="img-fluid " style={{height:'233px'}} alt="home img" />
    <h5 style={{textAlign:"center"  }}><b>Exclusive community</b></h5>
    <p style={{textAlign:"left"}}></p>
    </Col>
  </Row>
  <br/>
  <br/>
  <Row><h4><b>Join The Best Entreprenure and Investor Today!</b></h4></Row>
  <br/>
  <Row><Link to="/signIn"><Button color="primary">Get Started</Button></Link></Row>
  </div>
  <div>
    <Footer/>
  </div>
    </div>
  );
}
