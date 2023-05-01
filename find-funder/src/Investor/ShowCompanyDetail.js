import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InvestorHeader from './InvestorHeader'
import axios from "axios"
import { Link ,useNavigate} from 'react-router-dom'
import { Row,Col,Button, Container } from 'reactstrap'
import BaseURL from '../AxiosFunction'
import Footer from '../Component/Footer'
import { ToastContainer, toast } from "react-toastify";

export default function ShowCompanyDetail() {
  const navigate=useNavigate()
  console.log(useParams());
  const { id } = useParams();
  const cid = parseInt(id)
  const[proposalId,setproposalId]=useState(cid)
  console.log("proposalid",proposalId);
  const [name, setName] = useState([])
  const [investment, setInvestment] = useState([])

  const arr  = Object.values(investment);
  console.log("arr",arr);

  useEffect(() => {
    console.log("useEffect called")
    const fetchData = async () => {
      try {
        const response = await BaseURL.get("/api/CompanyProposal");
        console.log("result", response);
        const data = response.data.items.filter((item) =>item.id === cid)
        console.log(data);
        setName(data)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
// ---------investment statastic--------------
    const investmentData = async () => {
      try {
        const response = await BaseURL.get(`/api/InvestmentStatistics/${cid}`);
        console.log("investment", response);
        setInvestment(response.data)
      } catch (error) {
        console.log("error", error);
      }
    };
    investmentData();


  }, [])
  console.log("Companydata", name);

  const  handleRequest=async ()=>{
  const payload=JSON.stringify({proposalId:proposalId})
      try{
        let result = await BaseURL.post("/api/RequestProposal",payload)

       if(result.status==200) {
        toast.success("Request added succesfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate("/investorrequest")
        }, 3000);
  
        }
      
    }catch (error) {
      console.log("error", error);
      toast.error("Something went wrong ", {
        position: toast.POSITION.TOP_RIGHT,
      });

    }
    }

    const handlePayment= (event,param) => {
      console.log(param);
      navigate("/payment",{state:{proposalId:param}})
     }
    
  return (
    <div>
      <InvestorHeader />
      <div className='App-profile'>
        {name.map((item) => {
            return (
      <Row xs="2"  className="align-items-center">
      <Col >
    <img src={item.logo} className="img-fluid " alt="home img" style={{height:200,width:300}} />
    </Col>
    <Col className="class-col" >  
    <h5 style={{textAlign:"center"}}><b>{item.name}</b></h5>
    <p style={{textAlign:"left"}}> {item.detail}. </p>
    {!item.isPublic ? <Button onClick={handleRequest}  color="primary">Send Request</Button>:<Button  onClick={event=>handlePayment(event,proposalId)}  color="primary">Payment</Button>}
    </Col>
  </Row>

    )
  })}
  
  <br/>
  <Container>
  <Row>
    <h5>Market Overview</h5>
  </Row>
  <br/>
  {name.map((item)=>{
    return(
  <Row style={{ boxShadow: ' 5px 10px 8px #888888'}}>
    <Col >
    <p>{item.currentRevenue}</p>
    <h6>current Revenue</h6>
    </Col>
    <Col>
    <p>{item.requiredAmount}</p>
    <h6>Required Amount</h6>
    </Col>
    <Col>
    <p>{item.equity}%</p>
    <h6>Equity</h6>
    </Col>
  </Row>
)})}
  </Container>
  
  <br/>
  <Container style={{ boxShadow: ' 5px 10px 8px #888888'}}>
  <Row >
    <h5>Company Status</h5>
  </Row>
  <br/>
  <Row>
    <Col>
    <p>{arr[4]}</p>
    <h6>Raised Amount</h6>
    </Col>
    <Col>
    <p>{arr[2]}</p>
    <h6>Given Equity</h6>
    </Col>
  </Row>
<br/>
  <Row >
    <Col>
    <p>{arr[5]}</p>
    <h6>Remaining Amount</h6>
    </Col>
    <Col>
    <p>{arr[3]}</p>
    <h6>Remained Equity</h6>
    </Col>
  </Row>

  </Container>
      </div>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}
