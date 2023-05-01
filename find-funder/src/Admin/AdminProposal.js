import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import BaseURL from "../AxiosFunction";
import { MDBIcon } from "mdb-react-ui-kit";
import { Input, Label, Modal,ModalBody,ModalHeader,Row ,Col, Button} from 'reactstrap';


export default function AdminProposal() {
  const [data, setdata] = useState([]);
  const [modal,setModal]=useState(false)
  const [enddate,setendDate]=useState("")


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await BaseURL.get(
        "/api/Admin/CompanyProposal",
      );
      console.log("proposal", response);
      setdata(response.data.items);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleEdit=(event,param)=>{
    setendDate(param)
  }

  return (
    <div>
              <Modal
              size='md'
              isOpen={modal}
              toggle={()=>setModal(!modal)}
              
              >
                <ModalHeader toggle={()=>setModal(!modal)}>
            Edit EndDate
                </ModalHeader>
                <ModalBody>
                  <form>
                    <Row  style={{marginLeft:"10px",marginRight:"10px"}}>
            
                     EndDate
                     <br/>
                      <Input type="text" value={enddate} />
                 <Row>
           
              <Col md={4}>
                     <Button style={{marginTop:"19px" ,marginLeft:"0px"}} color='primary'>Edit</Button>
                     </Col>
                     </Row>
                    </Row>
                  </form>
                </ModalBody>
              </Modal>


      <Sidebar/>
      <div className='main'>
      <table class="table  table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Company Name</th>
              <th scope="col">Proposal Type</th>
              <th scope="col">Current Revenue</th>
              <th scope="col">Required Amount</th>
              <th scope="col">End Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</td>
                  <td>{item.isPublic?"Public":"Private"}</td>
                  <td>{item.currentRevenue}</td>
                  <td>{item.requiredAmount}</td>
                  <td>{item.endDate?.slice(0,item.endDate.indexOf("T")) }</td>
                <td><MDBIcon class="fas fa-pen-to-square"  style={{fontSize:"19px",color:"#6C9BCF"}} 
                 onClick={(event)=>{
                  handleEdit(event,item.endDate)
                  setModal(true)
                  }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
