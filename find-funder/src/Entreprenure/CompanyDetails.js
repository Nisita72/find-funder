// import React, { useState, useEffect } from "react";
// import {
//   Form,
//   Button,
//   Input,
//   Row,
//   Col,
//   FormGroup,
//   Label,
//   FormText,
// } from "reactstrap";
import EntreprenureHeader from "./EntreprenureHeader";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";

// export default function CompanyDetails() {
//   const [country, setCountry] = useState([]);
//   const [countryId, setcountryId] = useState("");
//   const [state, setState] = useState([]);
//   const [stateId, setstateId] = useState("");
//   const [city, setCity] = useState([]);
//   const [cityId, setcityId] = useState();
//   const navigate = useNavigate();

//   const [initialValues, setInitialValue] = useState({
//     Name: "",
//     Address: "",
//     PinCode: 0,
//     Logo: "",
//     WebsiteUrl: "",
//     cityId: 0,
//     Description: "",
//     ProposalDetail: "",
//     PitchDocument: "",
//     TotalEmployee: 0,
//     TotalBranch: 0,
//     BusinessType: 0,
//     CurrentRevenue: 0,
//     StartupDate: "",
//     Equity: 0,
//     RequiredAmount: 0,
//     IsPublic: null,
//     ProposalStartDate: "",
//     ProposalEndDate: "",
//     Location: "123.345",
//   });
//   useEffect(() => {
//     const getCountry = async () => {
//       const resCountry = await fetch(
//         "http://192.168.1.12:5182/api/CityStateCountry/getAllCountry"
//       );
//       const rescon = await resCountry.json();
//       console.log("res", rescon);
//       setCountry(rescon);
//     };
//     getCountry();
//   }, []);

//   const handleCountry = (e) => {
//     setcountryId(e.target.value);
//   };

//   useEffect(() => {
//     const getState = async () => {
//       const resState = await fetch(
//         `http://192.168.1.12:5182/api/CityStateCountry/getAllState/${countryId}`
//       );
//       const resSta = await resState.json();
//       console.log("res", resSta);
//       setState(resSta);
//     };
//     countryId && getState();
//   }, [countryId]);

//   const handlestate = (e) => {
//     setstateId(e.target.value);
//   };

//   useEffect(() => {
//     const getCity = async () => {
//       const resCity = await fetch(
//         `http://192.168.1.12:5182/api/CityStateCountry/getAllCity/${stateId}`
//       );
//       const rescity = await resCity.json();
//       console.log("res", rescity);
//       setCity(rescity);
//     };
//     stateId && getCity();
//   }, [stateId]);

//   const handlecity = (e) => {
//     setInitialValue({ ...initialValues, cityId: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(initialValues);
//     const formdata = new FormData();

//     for (let key in initialValues) {
//       formdata.append(key, initialValues[key]);
//       console.log("KEY AND INITIAl", key, initialValues[key]);
//     }

//     const token = `Bearer ${JSON.parse(localStorage.getItem("login"))}`;
//     try {
//       let result = await axios.post(
//         "http://192.168.1.12:5182/api/CompanyProposal",
//         formdata,
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "multipart/form-data;boundary=--WebKitFormBoundary979786hvhvhv",
//             // "Accept": "application/json",
//             // "type": "formData"
//           },
//         }
//       );
//       console.log("result", result);
//       if (result.status == 200) {
//         alert(result.data);
//         navigate("/entrepreureprofile");
//       }
//     } catch (error) {
//       alert("Data Enter Correctly");
//     }
//   };

//   return (
//     <div>

//         <EntreprenureHeader />
//         <div className="App-company">
//           <h3 style={{ textAlign: "center" }}>Company Proposal</h3>
//           <br />
//           <Form>
//             <Row>
//               <Col md={6}>
//                 <FormGroup>
//                   <Label for="name">Company Name</Label>
//                   <Input
//                     value={initialValues.Name}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         Name: e.target.value,
//                       })
//                     }
//                     placeholder="CompanyName"
//                     type="text"
//                   />
//                 </FormGroup>
//               </Col>
//               <Col md={6}>
//                 <FormGroup>
//                   <Label for="logo">Company Logo</Label>
//                   <Input
//                   // value={initialValues.Logo}
//                   //   onChange={(e)=>setInitialValue({...initialValues,Logo:e.target.value})} 
//               onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         Logo: e.target.files[0],
//                       })
//                     } 
//                     placeholder="png File"
//                     type="file"
//                   />
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={6}>
//                 <FormGroup>
//                   <Label for="url">Website Url</Label>
//                   <Input
//                     value={initialValues.WebsiteUrl}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         WebsiteUrl: e.target.value,
//                       })
//                     }
//                     placeholder="http://example.com"
//                   />
//                 </FormGroup>
//               </Col>
//               <Col md={6}>
//                 <FormGroup>
//                   <Label>Pitch Document</Label>
//                   <Input
//                   //  value={initialValues.Logo}
//                   //  onChange={(e)=>setInitialValue({...initialValues,PitchDocument:e.target.value})} 

//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         PitchDocument: e.target.files[0],
//                       })
//                     }
//                     placeholder="attech file"
//                     type="file"
//                   />
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={4}>
//                 <FormGroup>
//                   <Label>Address</Label>
//                   <Input
//                     value={initialValues.Address}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         Address: e.target.value,
//                       })
//                     }
//                     placeholder="1234 Main St"
//                   />
//                 </FormGroup>
//               </Col>
//               <Col md={4}>
//                 <FormGroup>
//                   <Label>PinCode</Label>
//                   <Input
//                     value={initialValues.PinCode}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         PinCode: e.target.value,
//                       })
//                     }
//                     placeholder="******"
//                   />
//                 </FormGroup>
//               </Col>
//               <Col md={4}>
//                 <FormGroup>
//                   <Label>Location</Label>
//                   <Input
//                     value={initialValues.Location}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         Location: e.target.value,
//                       })
//                     }
//                   />
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={4}>
//                 <FormGroup>
//                   <Label for="exampleCountry">Country</Label>
//                   <Input
//                     id="exampleCountry"
//                     name="Country"
//                     type="select"
//                     onChange={handleCountry}
//                   >
//                     <option>Country</option>
//                     {country?.map((item, index) => {
//                       return (
//                         <option key={index} value={item.id}>
//                           {item.name}
//                         </option>
//                       );
//                     })}
//                   </Input>
//                 </FormGroup>
//               </Col>
//               <Col md={4}>
//                 <FormGroup>
//                   <Label for="exampleState">State</Label>
//                   <Input
//                     id="exampleState"
//                     name="state"
//                     type="select"
//                     onChange={handlestate}
//                   >
//                     <option>State</option>
//                     {state.length
//                       ? state?.map((item, index) => {
//                           return (
//                             <option key={index} value={item.id}>
//                               {item.name}
//                             </option>
//                           );
//                         })
//                       : []}
//                   </Input>
//                 </FormGroup>
//               </Col>
//               <Col md={4}>
//                 <FormGroup>
//                   <Label for="exampleCity">City</Label>
//                   <Input
//                     value={initialValues.cityId}
//                     onChange={handlecity}
//                     type="select"
//                   >
//                     <option>City</option>
//                     {city?.map((item, index) => {
//                       return (
//                         <option key={index} value={item.id}>
//                           {item.name}
//                         </option>
//                       );
//                     })}
//                   </Input>
//                 </FormGroup>
//               </Col>
//             </Row>

//             <FormGroup>
//               <Label>Company Description</Label>
//               <Input
//                 value={initialValues.Description}
//                 onChange={(e) =>
//                   setInitialValue({
//                     ...initialValues,
//                     Description: e.target.value,
//                   })
//                 }
//                 placeholder="CompanyDescription"
//                 type="text"
//               />
//             </FormGroup>

//             <FormGroup>
//               <Label>Proposal Detail</Label>
//               <Input
//                 value={initialValues.ProposalDetail}
//                 onChange={(e) =>
//                   setInitialValue({
//                     ...initialValues,
//                     ProposalDetail: e.target.value,
//                   })
//                 }
//                 placeholder="ProposalDetail"
//                 type="text"
//               />
//             </FormGroup>

//             <Row>
//               <Col md={4}>
//                 <FormGroup>
//                   <Label>Total Employee</Label>
//                   <Input
//                     value={initialValues.TotalEmployee}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         TotalEmployee: e.target.value,
//                       })
//                     }
//                     type="number"
//                   />
//                 </FormGroup>
//               </Col>
//               <Col md={4}>
//                 <FormGroup>
//                   <Label>Total Branch</Label>
//                   <Input
//                     value={initialValues.TotalBranch}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         TotalBranch: e.target.value,
//                       })
//                     }
//                     type="number"
//                   />
//                 </FormGroup>
//               </Col>
//               <Col md={4}>
//                 <FormGroup>
//                   <Label>Bussiness Type</Label>
//                   <Input
//                     value={initialValues.BusinessType}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         BusinessType: e.target.value,
//                       })
//                     }
//                     type="select"
//                   >
//                     <option value={0}>ProductBased</option>
//                     <option value={1}>ServiceBased</option>
//                   </Input>
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={4}>
//                 <FormGroup>
//                   <Label>Equity</Label>
//                   <Input
//                     value={initialValues.Equity}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         Equity: e.target.value,
//                       })
//                     }
//                     placeholder="Stack of the Company"
//                     type="number"
//                   />
//                 </FormGroup>
//               </Col>
//               <Col md={4}>
//                 <FormGroup>
//                   <Label>Required Amount</Label>
//                   <Input
//                     value={initialValues.RequiredAmount}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         RequiredAmount: e.target.value,
//                       })
//                     }
//                     type="number"
//                   />
//                 </FormGroup>
//               </Col>
//               <Col md={4}>
//                 <FormGroup>
//                   <Label>Proposal Type</Label>
//                   <Input
//                     value={initialValues.IsPublic}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         IsPublic: e.target.value,
//                       })
//                     }
//                     type="select"
//                   >
//                     <option value={true}>Public</option>
//                     <option value={false}>Private</option>
//                   </Input>
//                 </FormGroup>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={6}>
//                 <FormGroup>
//                   <Label>Current Revenue</Label>
//                   <Input
//                     value={initialValues.CurrentRevenue}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         CurrentRevenue: e.target.value,
//                       })
//                     }
//                     type="number"
//                   />
//                 </FormGroup>
//               </Col>
//               <Col md={6}>
//                 <FormGroup>
//                   <Label>Startup Date</Label>
//                   <Input
//                     value={initialValues.StartupDate}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         StartupDate: e.target.value,
//                       })
//                     }
//                     type="date"
//                   />
//                 </FormGroup>
//               </Col>
//             </Row>

//             <Row>
//               <Col md={6}>
//                 <FormGroup>
//                   <Label>Proposal StartDate</Label>
//                   <Input
//                     value={initialValues.ProposalStartDate}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         ProposalStartDate: e.target.value,
//                       })
//                     }
//                     type="date"
//                   />
//                 </FormGroup>
//               </Col>
//               <Col md={6}>
//                 <FormGroup>
//                   <Label>Proposal EndDate</Label>
//                   <Input
//                     value={initialValues.ProposalEndDate}
//                     onChange={(e) =>
//                       setInitialValue({
//                         ...initialValues,
//                         ProposalEndDate: e.target.value,
//                       })
//                     }
//                     type="date"
//                   />
//                 </FormGroup>
//               </Col>
//             </Row>
//             <br />
//           </Form>
//           <Button
//             type="submit"
//             className="button"
//             color="primary"
//             onClick={handleSubmit}
//           >
//             Submit
//           </Button>
//         </div>
//         <Footer />
//       </div>
  

//   );
// }
import  React,{useState} from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CompanyDetail1 from './CompanyDetail1';
import CompanyDetail2 from './CompanyDetail2';
import CompanyDetail3 from './CompanyDetail3';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

const steps = ['Company Details', 'Proposal Details', 'Fill More Proposal Details'];

export default function CompanyDetails () {
  const [activeStep, setActiveStep] = React.useState(0);
  const navigate = useNavigate();
  const [CompanyData, setCompanyData] = useState({
    Name: "",
    Address: "",
    PinCode: 0,
    Logo: "",
    WebsiteUrl: "",
    cityId: 0,
    Description: "",
    ProposalDetail: "",
    PitchDocument: "",
    TotalEmployee: 0,
    TotalBranch: 0,
    BusinessType: 0,
    CurrentRevenue: 0,
    StartupDate: "",
    Equity: 0,
    RequiredAmount: 0,
    IsPublic: null,
    ProposalStartDate: "",
    ProposalEndDate: "",
    Location: "123.345",
  });

  const handleNext = () => {
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

const handleFinish=async (e)=>{
    e.preventDefault();
    console.log(CompanyData);
    const formdata = new FormData();

    for (let key in CompanyData) {
      formdata.append(key, CompanyData[key]);
      console.log("KEY AND INITIAl", key, CompanyData[key]);
    }

    const token = `Bearer ${JSON.parse(localStorage.getItem("login"))}`;
    try {
      let result = await axios.post(
        "http://192.168.1.14:5182/api/CompanyProposal",
        formdata,
        {
          headers: {
            Authorization: token,
            "Content-Type":
              "multipart/form-data;boundary=--WebKitFormBoundary979786hvhvhv",
          },
        }
      );
      console.log("result", result);
      if (result.status == 200) {
        toast.success("Thabnk you for Adding Response", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate("/entrepreureprofile");
        }, 3000);
      
      }
    } catch (error) {
      console.log(error);
      toast.error(" Please Data Enter Correctly", {
        position: toast.POSITION.TOP_RIGHT,
      });

    
        }
}
  return (
    <div>
      
   <EntreprenureHeader />

    <div className='App-company'>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
      
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
 
        <React.Fragment>
            {activeStep==0?<Typography sx={{ mt: 2, mb: 1 }}><CompanyDetail1 CompanyData={CompanyData} setCompanyData={setCompanyData}/></Typography>:
               activeStep==1?<Typography sx={{ mt: 2, mb: 1 }}><CompanyDetail2 CompanyData={CompanyData} setCompanyData={setCompanyData}/></Typography>:
               <Typography sx={{ mt: 2, mb: 1 }}><CompanyDetail3 CompanyData={CompanyData} setCompanyData={setCompanyData}/></Typography>}
          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
    
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ?   <Button
              color="inherit"
              onClick={handleFinish}
            >
          Finish
            </Button> : 'Next'}
            </Button>
          </Box>
        </React.Fragment>

    </Box>
    </div>
    <Footer />
    <ToastContainer/>
    </div>
  );
}
