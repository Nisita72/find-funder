import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  Accordion,
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Row,
  Col,
  Input,
  InputGroup
} from "reactstrap";
import BaseURL from "../AxiosFunction";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function FAQ() {
  const [data, setData] = useState();
  const[question,setquestion]=useState("")



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await BaseURL.get("api/FAQ/getAll");
      console.log("Faq", response);
      setData(response.data.items);
    } catch (error) {
      console.log("error", error);
    }
  };

   const handlesubmit= async ()=>{
    const res=await BaseURL.get(`/api/FAQ/getAnswer/${question}`)
    console.log("answer",res);
   }
   
  return (
    <div>
      <Header />

      <div className="App">
      <InputGroup>
      
              <Input
                type="text"
                value={question}
                onChange={(e) =>
                  setquestion( e.target.value )
                }
                placeholder="Find Answer"
              />
              <span className="input-group-text" onClick={handlesubmit}>
              
                  <MDBIcon class="fas fa-magnifying-glass" size="sm" style={{color:"blue"}}   />
          
              </span>
            </InputGroup>
      </div>

      <div className="faq">
        <Row>
          <Col md={4}>
            <h2>Frequenty Asked Question</h2>
            <br />
            <p>
              Find Funder is your destination for the most Frequently Asked
              Questions
            </p>
          </Col>
          <Col md={8}>
            <UncontrolledAccordion defaultOpen={["1"]} stayOpen>
              {data?.map((item, index) => {
                return (
                  <AccordionItem>
                    <AccordionHeader targetId={item.id}>
                      {item.question}
                    </AccordionHeader>
                    <AccordionBody accordionId={item.id}>
                      {item.answer}
                    </AccordionBody>
                  </AccordionItem>
                );
              })}

              {/* <AccordionItem>
    <AccordionHeader targetId="2">
      Accordion Item 2
    </AccordionHeader>
    <AccordionBody accordionId="2">
      <strong>
        This is the second item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="3">
      Accordion Item 3
    </AccordionHeader>
    <AccordionBody accordionId="3">
      <strong>
        This is the third item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem> */}
            </UncontrolledAccordion>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
