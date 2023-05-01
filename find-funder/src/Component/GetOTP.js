import React, { useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import BaseURL from "../AxiosFunction";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";

export default function GetOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const email = location.state.email;
  console.log(email);
  const [otp, setotp] = useState();

  const handleClick = async (e) => {
    e.preventDefault();
    const payload = { otp, email };
    try {
      let result = await BaseURL.post(
        "/api/ForgotPassword/checkOTP",payload);
      console.log("result", result);

      let result1 = await result.json();
      console.log("result", result1);

      localStorage.setItem("sendOTP", result1);

      if (result.status == 200) {
        toast.success("Change Password", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate("/changepassword",{state:{email:email}});
        }, 3000);
        

      } 
    } catch (error) {
      console.log("error", error);
      toast.error("enter valid otp", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div>
   <Header/>
      <div className="App-forgot">
        <MDBContainer fluid>
          <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="11"
                  lg="12"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Your OTP"
                      id="form3"
                      placeholder="******"
                      value={otp}
                      onChange={(e) => setotp(e.target.value)}
                      type="password"
                    />
                  </div>
                  <MDBBtn className="mb-4" onClick={handleClick} size="lg">
                    Submit OTP
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}
