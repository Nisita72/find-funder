import React from 'react'
import InvestorHeader from './InvestorHeader'
import x from "../images/investor.png";
import y from "../images/investor1.png";
import z from "../images/investor2.png";
import { Col,Row,Button } from "reactstrap";
import { Link } from 'react-router-dom';
import Footer from '../Component/Footer';

export default function InvestorHome() {
  return (
    <div>
   <InvestorHeader/>
<div className='App'>
<Row xs="2"  className="align-items-center">
    <Col className="class-col" >  
    <h4 style={{textAlign:"left"  }}><b>Invest in a Startups that you love</b></h4>
    <p style={{textAlign:"left"}}> Invest,learn,interact and grow your wealth  while helping  the best founder  bulding successful startups.</p>

    </Col>
    <Col >
    <img src={y} className="img-fluid " alt="home img" />
    </Col>
  </Row>
  <br/>
<Row xs="2"  className="align-items-center">
<Col >
    <img src={x} className="img-fluid " alt="home img" />
    </Col>
    <Col className="class-col" >  
    <h4 style={{textAlign:"left"  }}><b>Instant Information</b></h4>
    <p style={{textAlign:"left"}}>Know how  your protfolio work and keep track  of all key metrics with our Analytics.</p>
    </Col>
  </Row>
  <br/>
  <Row xs="2"  className="align-items-center">
    <Col className="class-col" >  
    <h4 style={{textAlign:"left"  }}><b>Keep Investment Record</b></h4>
    <p style={{textAlign:"left"}}>Keeping accurate and up-to-date records is vital to the success of your business. </p>
    </Col>
    <Col >
    <img src={z} className="img-fluid " alt="home img" />
    </Col>
  </Row>
  <br/>
  <Row><h4><b>Start Investing</b></h4></Row>
  <Row><Link to="/alldeals"><Button color="primary">Invest Now</Button></Link></Row>
  <br/>

</div>
<Footer/>
    </div>
  )
}
