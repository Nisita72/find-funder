import React,{ useState,useEffect } from 'react'
import { Form, Button, Input,Row,Col,FormGroup,Label,FormText } from 'reactstrap'
import EntreprenureHeader from './EntreprenureHeader';
import BaseURL from '../AxiosFunction';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Component/Footer';

export default function EUpdateProfile() {

  const navigate=useNavigate()
  const[data,setdata]=useState([])
  const[endDate,setEndDate]=useState("")
  console.log(endDate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BaseURL.get("/api/CompanyProposal/myCompanyProposal"
        );
        console.log("response", response);
        setdata(response.data)
        console.log(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [])


  const handleUpdate= async (e)=>{
    e.preventDefault();
      const payload={dateTime:endDate}
           try{
         const response = await BaseURL.put("/api/CompanyProposal/CompanyProposalEndDate",payload
        );
          console.log("update", response);

          if (response.status==200) {
            alert("End Date update successfully")
            navigate("/entrepreureprofile");        
        }
      }
        catch (error) {
       alert(error.response.data.Message);
        }
  }
  return (
    
    <div>
        <div>
        <EntreprenureHeader/>
    <div className='App-company'>
      <h3 style={{textAlign:'center'}}> Update Company Proposal</h3>
      <br/>
    <Form>
   <Row>
  <Col md={6}>
    <FormGroup>
      <Label for="name">
        Company Name
      </Label>
      <Input
         defaultValue={data. name}
        placeholder="CompanyName"
        type="text"
        readOnly={true}
      />
    </FormGroup>
  </Col>
  <Col md={6}>
    <FormGroup>
      <Label for="logo">
        Company Logo
      </Label>
      <Input

 defaultValue ={data.logo?.substring(data.logo.lastIndexOf('/')+1)}
        placeholder="png File"
        readOnly={true}
      />
    </FormGroup>
  </Col>
</Row>
<Row>
  <Col md={6}>
<FormGroup>
  <Label for="url">
    Website Url
  </Label>
  <Input
    defaultValue={data.websiteUrl}
    placeholder="http://example.com"
    readOnly={true}
  />
</FormGroup>
</Col>
<Col md={6}>
<FormGroup>
  <Label >
    Pitch Document
  </Label>
  <Input
         defaultValue={data.pitchDocument?.substring(data.pitchDocument.lastIndexOf('/')+1)}
    placeholder="attach file"
    readOnly={true}

  />
</FormGroup>
</Col>
</Row>
<Row>
<Col md={4}>
<FormGroup>
  <Label >
    Address
  </Label>
  <Input
    defaultValue={data.address}
    placeholder="1234 Main St"
    readOnly={true}
  />
</FormGroup>
</Col>
<Col md={4}>
<FormGroup>
  <Label >
    PinCode
  </Label>
  <Input
      defaultValue={data.pinCode}
    placeholder="******"
    readOnly={true}
  />
</FormGroup>
</Col>
<Col md={4}>
<FormGroup>
  <Label >
    Location
  </Label>
  <Input
      defaultValue={data.location}
    readOnly={true}
  />
</FormGroup>
</Col>
</Row>
<Row>
  <Col md={4}>
  <FormGroup>
  <Label for="exampleCountry">
    Country
  </Label>
  <Input
    id="exampleCountry"
    name="Country"
    defaultValue={data.countryName}
    readOnly={true}
  >
  </Input>
</FormGroup>
  </Col>
  <Col md={4}>
     <FormGroup>
  <Label for="exampleState">
    State
  </Label>
  <Input
    id="exampleState"
    name="state"
    defaultValue={data.stateName}
    readOnly={true}
  >
  </Input>
</FormGroup>
  </Col>
  <Col md={4}>
  <FormGroup>
  <Label for="exampleCity">
    City
  </Label>
  <Input
   defaultValue={data.cityName}
   readOnly={true}
  >
  </Input>
</FormGroup>
  </Col>
</Row>

    <FormGroup>
      <Label >
        Company Description
      </Label>
      <Input
      
      defaultValue={data.description}
        placeholder="CompanyDescription"
        type="text"
        readOnly={true}
      />
    </FormGroup>

    <FormGroup>
      <Label >
        Proposal Detail
      </Label>
      <Input
          defaultValue={data.detail}
        placeholder="ProposalDetail"
        type="text"
        readOnly={true}
      />
    </FormGroup>
<Row>
  <Col md={4}>
  <FormGroup>
  <Label >
    Total Employee
  </Label>
  <Input
       defaultValue={data.totalEmployee}
      readOnly={true}
 />
</FormGroup>
  </Col>
  <Col md={4}>
<FormGroup>
  <Label >
  Total Branch
  </Label>
  <Input
       defaultValue={data.totalBranch}
      readOnly={true}
  />
</FormGroup>
  </Col>
  <Col md={4}>
  <FormGroup>
  <Label>
    Bussiness Type
  </Label>
  <Input
       defaultValue={data.businessType==0?"Product Based":"Service Based"}
      readOnly={true}
  >
  </Input>
</FormGroup>
  </Col>
</Row>

<Row>
  <Col md={4}>
<FormGroup>
      <Label >
     Equity
      </Label>
      <Input
        defaultValue={data.equity}
        placeholder="Stack of the Company"
        readOnly={true}
      />
    </FormGroup>
    </Col>
    <Col md={4}>
 
    <FormGroup>
      <Label >
        Required Amount
      </Label>
      <Input
       defaultValue={data.requiredAmount}
      readOnly={true}
      />
    </FormGroup>
    </Col>
    <Col md={4}>
<FormGroup>
  <Label >
   Proposal Type
  </Label>
  <Input
   defaultValue={data.isPublic?"public":"private"}
    readOnly={true}
  >
  </Input>
</FormGroup>
</Col>
</Row>
<Row>
<Col md={6}>
  <FormGroup>
  <Label >
   Current Revenue
  </Label>
  <Input
       defaultValue={data.currentRevenue}
      readOnly={true}
 />
</FormGroup>
  </Col>
  <Col md={6}>
  <FormGroup>
  <Label >
  Startup Date
  </Label>
  <Input
       defaultValue={data.startupDate?.slice(0,data.startupDate.indexOf("T"))}
      readOnly={true}
 />
</FormGroup>
  </Col>
</Row>
<Row>
<Col md={6}>
  <FormGroup>
  <Label >
Proposal StartDate
  </Label>
  <Input
  defaultValue={data.startDate?.slice(0,data.startupDate.indexOf("T"))}
readOnly={true}
 />
</FormGroup>
  </Col>
  <Col md={6}>
  <FormGroup>
  <Label >
   Proposal EndDate
  </Label>
  <Input
Value={endDate}
  onChange={(e)=>setEndDate(e.target.value)}
   type="date"
 />
</FormGroup>
  </Col>
</Row>
<br/>
<Button type='submit'  onClick={handleUpdate}  color="primary" >Update</Button>
</Form>
</div>
  </div>
  <Footer/>
    </div>
  )
}



