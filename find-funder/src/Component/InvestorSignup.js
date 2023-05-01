import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import x from "../images/signup.png";
import { Col, Row, InputGroup, Input, Label, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { MDBIcon } from "mdb-react-ui-kit";
import Header from "./Header";
import BaseURL from "../AxiosFunction";
import Footer from "./Footer";

export default function InvestorSignup() {
  const navigate = useNavigate();
  const [country, setCountry] = useState([]);
  const [countryId, setcountryId] = useState("");
  const [state, setState] = useState([]);
  const [stateId, setstateId] = useState("");
  const [city, setCity] = useState([]);
  const [cityId, setcityId] = useState();
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    mobileNo: "",
    birthDate: "",
    password: "",
    cityId: "",
  };
  const [value, setValue] = useState(initialData);
  const [formError, setformError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const getCountry = async () => {
      const resCountry = await fetch(
        "http://192.168.1.14:5182/api/CityStateCountry/getAllCountry"
      );
      const rescon = await resCountry.json();
      console.log("res", rescon);
      setCountry(rescon);
    };
    getCountry();
  }, []);

  const handleCountry = (e) => {
    setcountryId(e.target.value);
  };

  useEffect(() => {
    const getState = async () => {
      const resState = await fetch(
        `http://192.168.1.14:5182/api/CityStateCountry/getAllState/${countryId}`
      );
      const resSta = await resState.json();
      console.log("res", resSta);
      setState(resSta);
    };
    countryId && getState();
  }, [countryId]);

  const handlestate = (e) => {
    setstateId(e.target.value);
  };

  useEffect(() => {
    const getCity = async () => {
      const resCity = await fetch(
        `http://192.168.1.14:5182/api/CityStateCountry/getAllCity/${stateId}`
      );
      const rescity = await resCity.json();
      console.log("res", rescity);
      setCity(rescity);
    };
    stateId && getCity();
  }, [stateId]);

  const handlecity = (e) => {
    setValue({ ...value, cityId: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(value);
    setformError(validate(value));
    setIsSubmit(true);

    try {
      let result = await BaseURL.post("/api/Investor", value);
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
      console.log("error", error);
      toast.error("Please Data Enter Correctly", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const validate = (values) => {
    const error = {};
    const regex = /^[A-Za-z][A-Za-z0-9_]{4,29}$/i;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordformat =
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;
    const dateofBirth =
      /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d+$/;
    const phoneNofOrmate = /^(\+\d{1,3}[- ]?)?\d{10}$/;

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
    } else if (!passwordformat.test(values.password)) {
      error.password =
        "Must contain at least  8  characters";
    }

    if (!values.address) {
      error.address = "address is required!";
    }
    if (!values.birthDate) {
      error.birthDate = "age must be 20 year old!";
    }
    if (!phoneNofOrmate.test(value.mobileNo)) {
      error.mobileNo = "Enter valid phonno";
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
      <div className="App-investor">
        <h3 style={{ textAlign: "center" }}>SignUp as an Investor </h3>
        <br />
        <Row xs="2" className="align-items-center">
          <Col className="class-col">
            <img
              src={x}
              className="img-fluid "
              style={{ height: 350 }}
              alt="home img"
            />
          </Col>
          <Col className="class-col">
            <Row>
              <Col>
                <Label>First Name</Label>
                <InputGroup>
                  <span className="input-group-text  ">
                    <MDBIcon fas icon="user me-2" size="lg" />
                  </span>
                  <Input
                    type="text"
                    value={value.firstName}
                    onChange={(e) =>
                      setValue({
                        ...value,
                        firstName: e.target.value,
                      })
                    }
                    placeholder=" First Name"
                  />
                </InputGroup>
                <Label className="lable" style={{ color: "tomato" }}>
                  {formError.firstName}
                </Label>
              </Col>
              <Col>
                <Label>Last Name</Label>
                <InputGroup>
                  <span className="input-group-text  ">
                    <MDBIcon fas icon="user me-2" size="lg" />
                  </span>
                  <Input
                    type="text"
                    value={value.lastName}
                    onChange={(e) =>
                      setValue({ ...value, lastName: e.target.value })
                    }
                    placeholder="Last Name"
                  />
                </InputGroup>
                <Label className="lable" style={{ color: "tomato" }}>
                  {formError.lastName}
                </Label>
              </Col>
            </Row>
            <br />
            <Label>Address</Label>
            <InputGroup>
              <span className="input-group-text  ">
                <MDBIcon fas icon="address-card me-3" size="lg" />
              </span>
              <Input
                value={value.address}
                onChange={(e) =>
                  setValue({ ...value, address: e.target.value })
                }
                placeholder="A-110,example"
              />
            </InputGroup>
            <Label className="lable" style={{ color: "tomato" }}>
              {formError.address}
            </Label>
            <br />
            <Row>
              <Col>
                <Label>Country</Label>
                <InputGroup>
                  <Input type="select" onChange={handleCountry}>
                    <option>Country</option>
                    {country?.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </Input>
                </InputGroup>
              </Col>
              <Col>
                <Label>State</Label>
                <InputGroup>
                  <Input type="select" onChange={handlestate}>
                    <option>State</option>
                    {state.length
                      ? state.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })
                      : []}
                  </Input>
                </InputGroup>
              </Col>
              <Col>
                <Label>City</Label>
                <InputGroup>
                  <Input
                    type="select"
                    value={value.cityId}
                    onChange={handlecity}
                  >
                    <option>City</option>
                    {city.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </Input>
                </InputGroup>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Label>Mobile.No</Label>
                <InputGroup>
                  <span className="input-group-text  ">
                    <MDBIcon fas icon="phone-volume me-3" size="lg" />
                  </span>
                  <Input
                    value={value.mobileNo}
                    onChange={(e) =>
                      setValue({ ...value, mobileNo: e.target.value })
                    }
                    placeholder="10001 10001"
                  />
                </InputGroup>
                <Label className="lable" style={{ color: "tomato" }}>
                  {formError.mobileNo}
                </Label>
              </Col>
              <Col>
                <Label>Date Of Birth</Label>
                <InputGroup>
                  <span className="input-group-text  ">
                    <MDBIcon fas icon="calendar me-3" size="lg" />
                  </span>
                  <Input
                    type="date"
                    value={value.birthDate}
                    onChange={(e) =>
                      setValue({ ...value, birthDate: e.target.value })
                    }
                    placeholder="MM/DD/YYY"
                  />
                </InputGroup>
                <Label className="lable" style={{ color: "tomato" }}>
                  {formError.birthDate}
                </Label>
              </Col>
            </Row>
            <br />
            <Label>Email</Label>
            <InputGroup>
              <span className="input-group-text  ">
                <MDBIcon fas icon="envelope me-3" size="lg" />
              </span>
              <Input
                type="email"
                value={value.email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
                placeholder="Your Email"
              />
            </InputGroup>
            <Label className="lable" style={{ color: "tomato" }}>
              {formError.email}
            </Label>
            <br />
            <Label>Password</Label>
            <InputGroup>
              <span className="input-group-text  ">
                <MDBIcon fas icon="lock me-3" size="lg" />
              </span>
              <Input
                value={value.password}
                onChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
                type="password"
                placeholder="********"
              />
            </InputGroup>
            <Label className="lable" style={{ color: "tomato" }}>
              {formError.password}
            </Label>
            <br />
            
            <Button onClick={handleClick} color="primary">
              Register
            </Button>
          </Col>
        </Row>
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  );
}
