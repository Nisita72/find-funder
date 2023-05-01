import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Col, Row, InputGroup, Input, Label, Button } from "reactstrap";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import BaseURL from "../AxiosFunction";
import Header from "./Header";
import x from "../images/signup.png";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";

export default function SignIn() {
  const navigate = useNavigate();
  const initialData = {
    userName: "",
    password: "",
  };
  const [passwordType, setPasswordType] = useState("password");
  const [value, setValue] = useState(initialData);
  const [formError, setformError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setformError(validate(value));
    try {
      let result = await BaseURL.post("/api/Login/login", value);
      console.log("result", result);
      localStorage.setItem("login", JSON.stringify(result.data));
      const decoded = jwt_decode(result.data);
      console.log(decoded);

      for (let key in decoded) {
        if (key.endsWith("role")) {
          console.log(key);
          if (decoded[key] === "Investor") {
            localStorage.setItem("id", decoded.Id);
            setTimeout(() => {
              navigate("/homepageforInvestor");
            }, 3000);
          } else if (decoded[key] === "Admin") {
            localStorage.setItem("id", decoded.Id);
            setTimeout(() => {
              navigate("/admin");
            }, 3000);
          } else {
            localStorage.setItem("id", decoded.Id);
            setTimeout(() => {
              navigate("/homepageforEntreprenure");
            }, 3000);
          }
        }
      }
      console.log("---->>", result);
      if (result.status == 200) {
        toast.success("login successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });

      }
    } catch (error) {
      toast.error("Please Data Enter Correctly", {
        position: toast.POSITION.TOP_RIGHT,
      });

    }
  };

  const validate = (values) => {
    const error = {};
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordformat =
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;

    if (!values.userName) {
      error.userName = "Email is required!";
    } else if (!mailformat.test(values.userName)) {
      error.userName = "Email is not valid!";
    }

    if (!values.password) {
      error.password = "password is required!";
    } else if (!passwordformat.test(values.password)) {
      error.password = "Must contain at least  8  characters";
    }

    return error;
  };
  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log("error");
    }
  }, [formError]);

  return (
    <div>
      <Header />

      <div className="App-signin">
        <h3 style={{ textAlign: "center" }}>SignIn</h3>
        <br />
        <Row xs="2" className="align-items-center">
          <Col className="class-col">
            <img src={x} className="img-fluid " alt="home img" />
          </Col>
          <Col className="class-col">
            <Label>Email</Label>
            <InputGroup>
              <span className="input-group-text  ">
                <MDBIcon fas icon="envelope me-3" size="lg" />
              </span>
              <Input
                type="email"
                value={value.userName}
                onChange={(e) =>
                  setValue({ ...value, userName: e.target.value })
                }
                placeholder="Your Email"
              />
            </InputGroup>
            <Label style={{ color: "red" }}>{formError.userName}</Label>
            <br />
            <Label>Password</Label>
            <InputGroup>
              <span className="input-group-text  ">
                <MDBIcon fas icon="lock me-3" size="lg" />
              </span>
              <Input
                type={passwordType}
                value={value.password}
                onChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
                placeholder="********"
              />
              <span className="input-group-text" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <MDBIcon class="fas fa-eye-slash" size="sm" />
                ) : (
                  <MDBIcon class="far fa-eye" size="sm" />
                )}
              </span>
            </InputGroup>
            <Label style={{ color: "red" }}>{formError.password}</Label>

            <div style={{ textAlign: "left" }}>
              <Link to="/forgetpassword">Forgot password?</Link>
            </div>

            <div style={{ textAlign: "center", padding: "7px" }}>
              <MDBBtn className="mb-4" size="lg" onClick={handleClick}>
                SignIn
              </MDBBtn>
            </div>
            <div style={{ padding: "0px" }}>
              <p style={{ textAlign: "center" }}>Don't have an account?</p>
              <div style={{ padding: "0px" }}>
                Register As &nbsp;
                <Link to="/EntrepreneurSignup" className="link-primary">
                  Entreprenure
                </Link>
                &nbsp;|&nbsp;
                <Link to="/InvestorSignup" className="link-primary">
                  Investor
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
