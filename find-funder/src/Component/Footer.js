import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import {Row,Col} from 'reactstrap'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='text-center text-white' style={{height:130 , backgroundColor: '#146C94' }}>
    <div class="container p-1 pb-0">
          <Row style={{textAlign:"center",marginTop:"30px"}}>
          <section class="">
          <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">Register for free</span>
         <Link to="/signin"><button type="button" class="btn btn-outline-light btn-rounded">
            Sign up!
          </button></Link> 
        </p>
      </section>
          </Row>
          </div>
          <Row>
            <p style={{textAlign:"center"}}> © 2020 Copyright:findfunder.com</p>
          </Row>
    </div>
  );
}