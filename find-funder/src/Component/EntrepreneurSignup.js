import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Header from "./Header";
import x from "../images/signup.png";
import { Col, Row, InputGroup, Input, Label, Button } from "reactstrap";
import BaseURL from "../AxiosFunction";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";

function EntrepreneurSignup() {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [formError, setformError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //handlesubmit
  const handleClick = async (e) => {
    e.preventDefault();
    const item = { firstName, lastName, email, password };
    console.log(item);
    setformError(validate(item));

    try {
      let result = await BaseURL.post("/api/Entrepreneur",item);
      console.log("result", result);
      if (result.status == 200) {
        toast.success("Registration successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate("/signIn");
        }, 3000);

      } 
    
    } catch (error) {
      toast.error("Please Data Enter Correctly", {
        position: toast.POSITION.TOP_RIGHT,
      });
console.log(error)
    }
  };

  const validate = (values) => {
    const error = {};
    const regex = /^[A-Za-z][A-Za-z0-9_]{4,29}$/i;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordformat =
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;

    if (!values.firstName) {
      error.firstName = "firstName is required!";
    } else if (!regex.test(values.firstName)) {
      error.firstName = "firstName is not valid!";
    }
    if (!values.lastName) {
      error.lastName = "lastName is required!";
    } else if (!regex.test(values.lastName)) {
      error.lastName = "lastName is not valid!";
    }

    if (!values.email) {
      error.email = "Email is required!";
    } else if (!mailformat.test(values.email)) {
      error.email = "Email is not valid!";
    }

    if (!values.password) {
      error.password = "password is required!";
    }
    if (!passwordformat.test(values.password)) {
      error.password =  "Must contain at least 8 characters";
    }
    return error;
  };
  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(firstName);
    }
  }, [formError]);

  return (
    <div>
      <Header />
      <div className="App-entro">
        <h3 style={{textAlign:"center"}}>SignUp as an Entrepreneur </h3>

        <br />
        <Row xs="2" className="align-items-center">
          <Col className="class-col">
            <img src={x} className="img-fluid " alt="home img" />
          </Col>
          <Col className="class-col">
          <Label>First Name</Label>
                <InputGroup>
                  <span className="input-group-text  ">
                    <MDBIcon fas icon="user me-2" size="lg" />
                  </span>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    placeholder=" First Name"
                  />
                  
                </InputGroup>
                <Label className="lable" style={{color:"tomato"}}>{formError.firstName}</Label>
                <br/>
                <Label>Last Name</Label>
                <InputGroup>
                  <span className="input-group-text  ">
                    <MDBIcon fas icon="user me-2" size="lg" />
                  </span>
                  <Input
                    type="text"
                    value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                    placeholder=" Last Name"
                  />
                </InputGroup>
                <Label className="lable" style={{color:"tomato"}}>{formError.lastName}</Label>
                <br/>
                <Label>Email</Label>
            <InputGroup>
              <span className="input-group-text  ">
                <MDBIcon fas icon="envelope me-3" size="lg" />
              </span>
              <Input
                type="email"
                value={email}
                  onChange={(e) => setemail(e.target.value)}
                placeholder="Your Email"
              />
            </InputGroup>
            <Label className="lable" style={{color:"tomato"}}>{formError.email}</Label>
            <br/>
            <Label >
          Password
          </Label>
            <InputGroup>
                <span className="input-group-text  ">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                </span>
              <Input  value={password} id="myInput"
                  onChange={(e) => setpassword(e.target.value)} type='password' placeholder="********" />
            </InputGroup>
            <Label className="lable" style={{color:"tomato"}}>{formError.password}</Label>
            <br/>
            <br/>
        <MDBBtn className="mb-4" size="lg" onClick={handleClick}>
                Register
              </MDBBtn>
          </Col>
        </Row>
      </div>
<Footer/>
<ToastContainer/>
    </div>
  );
}
export default EntrepreneurSignup;
