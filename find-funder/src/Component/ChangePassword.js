
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

export default function ChangePassword() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const email = location.state.email;
  console.log(email);

  const [newPassword, setnewPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const payload = { newPassword, email };
    try {
      let result = await BaseURL.put(
        "/api/ForgotPassword/updatePassword",payload );
      console.log("result", result);
      if (result.status == 200) {
        toast.success("Password change successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate("/signIn");
        }, 3000);

      } 
    } catch (error) {
      console.log("error", error);
      toast.error("enter valid password", {
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
                      label="new password"
                      id="form3"
                      placeholder="******"
                      value={newPassword}
                      onChange={(e) => setnewPassword(e.target.value)}
                      type="password"
                    />
                  </div>
                  <MDBBtn className="mb-4" onClick={handleClick} size="lg">
                    Change Password
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
