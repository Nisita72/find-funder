import React,{useState,useEffect} from "react";
import Header from "./Header";
import x from "../images/contact.png";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  InputGroup,
   Label,
  Input,
  Button,
} from "reactstrap";
import axios from "axios";
import Footer from "./Footer";
export default function ContactUS() {

  const [initialValues, setInitialValue] = useState({
    name: "",
   email: "",
   file:"",
   message:"",
   subject:"",
   mobileNo:""
  
  });
  const [formError, setformError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate=useNavigate()
  const handleSubmit= async (e)=>{
    e.preventDefault();
    console.log(initialValues);
    setformError(validate(initialValues));
        const formdata=new FormData()
       
        for(let key in initialValues){
            formdata.append(key,initialValues[key])
          console.log("KEY AND INITIAl",key,initialValues[key]);
          }
           try{
           let result = await axios.post("http://192.168.1.12:5182/api/Contactus",formdata, {
            headers:{
              "Content-Type":"multipart/form-data;boundary=--WebKitFormBoundary979786hvhvhv"
            }
          })
          console.log("result", result);
          if (result.status==200) {
            toast.success(result.data, {
              position: toast.POSITION.TOP_RIGHT
          }); 
          setTimeout(() => {
            navigate("/");
          }, 3000);     
          } 
        }catch (error) {
          console.log("error", error);
          toast.error("Please Data Enter Correctly", {
            position: toast.POSITION.TOP_RIGHT,
          });
        
        }
  }

  const validate = (values) => {
    const error = {};
    const regex = /^[A-Za-z][A-Za-z0-9_]{4,29}$/i;
    const regey = /^[A-Za-z][A-Za-z0-9_]{4,100}$/i;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneNofOrmate = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    if (!initialValues.name) {
      error.name = "name is required!";
    } else if (!regex.test(initialValues.name)) {
      error.name = "name is not valid!";
    }
    if (!initialValues.message) {
      error.message = "message is required!";
    } else if (!regey.test(initialValues.message)) {
      error.message = "message is not valid!";
    }
    if (!initialValues.subject) {
      error.subject = "subject is required!";
    } else if (!regey.test(initialValues.subject)) {
      error.subject = "subject is not valid!";
    }

    if (!initialValues.email) {
      error.email = "Email is required!";
    } else if (!mailformat.test(initialValues.email)) {
      error.email = "Email is not valid!";
    }

    if (!phoneNofOrmate.test(initialValues.mobileNo)) {
      error.mobileNo = "Enter valid phonno";
    }
    return error;
  };
  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {

    }
  }, [formError]);
  return (
    <div>
      <Header/>
      <div className="App-contact">
        <Row xs="2" className="align-items-center" >
        <Col>
            <img src={x} className="img-fluid " style={{height:350}} alt="home img" />
          </Col>
          <Col className="class-col" >
            <Row>
              <Col>
          <Label >
        Name 
          </Label>
            <InputGroup>
              <Input type="text"  value={initialValues.name} placeholder="Your Name"
             onChange={(e)=>setInitialValue({...initialValues,name:e.target.value})}  />
            </InputGroup>
            <Label className="lable" style={{ color: "tomato" }}>
                  {formError.name}
                </Label>
            </Col>
            <Col>

            <Label >
    Email
          </Label>
            <InputGroup>
            
            <Input type="email"  value={initialValues.email} placeholder="Your Email"
        onChange={(e)=>setInitialValue({...initialValues,email:e.target.value})} >
            </Input>
            </InputGroup>
            <Label className="lable" style={{ color: "tomato" }}>
                  {formError.email}
                </Label>
      </Col>
            </Row>
            <br/>
            <Row>
              <Col>
            <Label >
      Mobile No
          </Label>
            <InputGroup>
              <Input  type="text"   value={initialValues.mobileNo} 
        onChange={(e)=>setInitialValue({...initialValues,mobileNo:e.target.value})} placeholder="***** ***** " />
            </InputGroup>
            <Label className="lable" style={{ color: "tomato" }}>
                  {formError.mobileNo}
                </Label><br/>
            </Col>
           <Col>
           
            <Label >
      Subject
          </Label>
            <InputGroup>
              <Input  type="textarea"  value={initialValues.subject} placeholder="Enter a subject"
        onChange={(e)=>setInitialValue({...initialValues,subject:e.target.value})}   />
            </InputGroup>
            <Label className="lable" style={{ color: "tomato" }}>
                  {formError.subject}
                </Label>
            </Col>
            </Row>

            <Label >
       Message
          </Label>
            <InputGroup>
              <Input type="textarea"   value={initialValues.message} placeholder="Enter your message"
        onChange={(e)=>setInitialValue({...initialValues,message:e.target.value})}/>
             
            </InputGroup>
            <Label className="lable" style={{ color: "tomato" }}>
                  {formError.message}
                </Label>
      <br/>
            <Label >
    File
          </Label>
            <InputGroup>
              <Input type="file"
                // value={initialValues.file}
                onChange={(e)=>setInitialValue({...initialValues,file:e.target.files[0]})} />
            </InputGroup>
        <br/>
            <Button onClick={handleSubmit} color="primary">submit</Button>
         </Col>
       
      </Row>
      </div>
      <Footer/>
      <ToastContainer/>
   </div>
  );
}
