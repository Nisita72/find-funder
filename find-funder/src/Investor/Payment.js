import React, { useState,useEffect } from "react";
import InvestorHeader from "./InvestorHeader";
import { useNavigate, useLocation } from "react-router-dom";
import { Row, Col, InputGroup, Label, Input, Button } from "reactstrap";
import x from "../images/payment.png";
import { MDBIcon } from "mdb-react-ui-kit";
import BaseURL from "../AxiosFunction";
import Footer from "../Component/Footer";
import { ToastContainer, toast } from "react-toastify";

export default function Payment() {
  const { state } = useLocation();
  console.log(state.proposalId);
  const navigate = useNavigate();

  const initialData = {
    proposalId: state.proposalId,
    cardHolderName: "",
    currency: "",
    amount: 0,
    cardNumber: 0,
    cardExpiryMonth: 0,
    cardExpiryYear: 0,
    cvc: "",
  };

  const [paymentData, setPaymentData] = useState(initialData);
  const [formError, setformError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  console.log(paymentData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setformError(validate(paymentData));
    const payload = JSON.stringify(paymentData);
    try {
      let result = await BaseURL.post("/api/Investment", payload, {});
      console.log("result", result);

      if (result.status === 200) {
        toast.success("Payment successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate("/totalinvestment");
        }, 3000);
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Somthing Went Wrong", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const validate = (values) => {
    const error = {};
    const regex = /^[A-Za-z][A-Za-z0-9_]{4,29}$/i;
    const CardNumber = /^4[0-9]{12}(?:[0-9]{3})?$/i;
    const cvv=/^[0-9]{3, 4}$/i;
  

    if (!values.cardHolderName) {
      error.cardHolderName = "Name is required!";
    } else if (!regex.test(values.cardHolderName)) {
      error.cardHolderName = "Name is not valid!";
    }
    if (!values.currency) {
      error.currency = "currency is required!";
    } 

    if (!values.amount) {
      error.amount = "amount is required!";
    } 
    if (!values.cardNumber) {
      error.cardNumber = "cardNumber is required!";
    }
    //  else if (!CardNumber.test(values.cardNumber)) {
    //   error.cardNumber = "cardNumber is not valid!";
    // }
    if (!values.cvc) {
      error.cvc = "cvc is required!";
    } 
    // else if (!cvv.test(values.cvc)) {
    //   error.cvc = "cvc is not valid!";
    // }
    return error;
  };
  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
    }
  }, [formError]);
  return (
    <div>
      <InvestorHeader />
      <div className="App-payment">
        <h3 style={{ textAlign: "center" }}>Payment </h3>
        <Col>
            <img src={x} className="img-fluid " style={{height:"250px",marginLeft:"130px"}} alt="home img" />
          </Col>
        <Row xs="1" className="align-items-center">
          <Col className="class-col">
            <Label>Name on Card</Label>
            <InputGroup>
              <span className="input-group-text  ">
                <MDBIcon fas icon="user me-2" size="lg" />
              </span>
              <Input
                type="text"
                value={paymentData.cardHolderName}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    cardHolderName: e.target.value,
                  })
                }
                placeholder="CardHolderName"
              />
            </InputGroup>
            <Label className="lable" style={{ color: "tomato" }}>
                  {formError.cardHolderName}
                </Label>
            <br />
            <Label>Card Number</Label>
            <InputGroup>
              <span className="input-group-text  ">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
                  style={{ width: 29 }}
                />
              </span>
              <Input
                type="number"
                value={paymentData.cardNumber}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    cardNumber: e.target.value,
                  })
                }
                placeholder="**** **** **** ****"
              />
            </InputGroup>
            <Label className="lable" style={{ color: "tomato" }}>
                  {formError.cardNumber}
                </Label>
            <br />
            <Row>
              <Col>
                <Label>Currency</Label>
                <InputGroup>
                  <Input
                    type="select"
                    value={paymentData.currency}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        currency: e.target.value,
                      })
                    }
                  >
                    <option selected>Currency</option>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </Input>
                </InputGroup>
                <Label className="lable" style={{ color: "tomato" }}>
       
                </Label>
              </Col>
              <Col>
                <Label>Amount</Label>
                <InputGroup>
                  <Input
                    type="number"
                    value={paymentData.amount}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        amount: e.target.value,
                      })
                    }
                    placeholder="total amount"
                  />
                </InputGroup>
                <Label className="lable" style={{ color: "tomato" }}>
                  {formError.amount}
                </Label>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Label>Expiry Date</Label>
                <InputGroup>
                  <Input
                    type="number"
                    value={paymentData.cardExpiryMonth}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        cardExpiryMonth: e.target.value,
                      })
                    }
                    placeholder="MM"
                  />
                  &nbsp;
                  <Input
                    type="number"
                    value={paymentData.cardExpiryYear}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        cardExpiryYear: e.target.value,
                      })
                    }
                    placeholder="YY"
                  />
                </InputGroup>
              </Col>
              <Col>
                <Label>CVC</Label>
                <InputGroup>
                  <Input
                    type="text"
                    value={paymentData.cvc}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        cvc: e.target.value,
                      })
                    }
                    placeholder="CVC"
                  />
                </InputGroup>
                <Label className="lable" style={{ color: "tomato" }}>
                  {formError.cvc}
                </Label>
              </Col>
            </Row>
            <br />
            <Button onClick={handleSubmit} color="primary">
              Pay Now
            </Button>
          </Col>
      
        </Row>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
