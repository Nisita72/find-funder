import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import Header from "./Header";
import BaseURL from "../AxiosFunction";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";

export default function ForgetPassword() {
  const [email, setemail] = useState();
  const navigate = useNavigate();

  //handle click
  const handleClick = async (e) => {
    e.preventDefault();
    console.log("email",typeof email,{email:email});
   let payload={email}
   
    try {
      let result = await BaseURL.post("/api/ForgotPassword/sendOTP",payload);
      console.log("result", result);
      if (result.status == 200) {
        toast.success("send OTP", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate("/getotp",{state:{email:email}});
        }, 3000);
      
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Otp Not Send", {
        position: toast.POSITION.TOP_RIGHT,
      });

    }
  };
  return (
    <div>
      <Header/>
      <div className="App-forgot">
        <h3>Forgot Password</h3>
        <MDBContainer fluid>
          <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="11"
                  lg="12"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Your Email"
                      id="form3"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      type="email"
                    />
                  </div>
                  <MDBBtn className="mb-4" onClick={handleClick} size="lg">
                    Send OTP
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
      <div style={{marginTop:"80px"}}>
      <Footer/>
      </div>
      <ToastContainer/>
    </div>
  );
}
