import React, { useState, useEffect } from 'react'
import InvestorHeader from './InvestorHeader'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Row } from 'reactstrap'
import BaseURL from '../AxiosFunction'
import Footer from '../Component/Footer'


export default function InvestorRequest() {
  const navigate=useNavigate()
  const [data, setdata] = useState([])
  const [name, setName] = useState([])
  
  useEffect(() => {
    console.log("useEffect called")
    const fetchData = async () => {
      const investorid=localStorage.getItem("id")
      console.log(investorid);
      try {
        const response = await BaseURL.get(`/api/RequestProposal/proposalRequests/1${investorid}`);
        console.log("resultfor request", response);
        setdata(response.data.items)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();

    const companyData = async () => {
      try {
        const response = await BaseURL.get("/api/CompanyProposal");
        console.log("result..", response);
        setName(response.data.items)
      } catch (error) {
        console.log("error", error);
      }
    };
    companyData();
  }, [])

  console.log("data..", data);
  console.log("name", name);

  const unique = [...new Map(data.map(item =>
    [item["proposalId"], item])).values()];
  console.log("newArr", unique)
  let newArray = []
  name.forEach((item) => {
    console.log("ITEM", item);
    unique.forEach((proposal) => {
      console.log("PROPOSAL", proposal)
      if (item.id === proposal.proposalId) {
        newArray.push({
          ...item,
          ...proposal
        })
      }
    })
  })

  console.log("newData", newArray)

  const handlePayment= (event,param) => {
   console.log(param);
   navigate("/payment",{state:{proposalId:param}})
  }
  return (
    <div>
      <InvestorHeader />
      <div className='App-profile'>
        <Row>
          <h4> Private Company Request </h4>
        </Row>
        <br/>
       
        <table class="table  table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Company Name</th>
              <th scope="col">Status</th>
              <th scope="col">Invest</th>
            </tr>
          </thead>
          <tbody>
            {newArray.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.status === 1 ? "Pending" : item.status === 2 ? "Accept" : "Reject"}</td>
                  <td>
                    {item.status === 2 ? <button onClick={event=>handlePayment(event,item.proposalId)} className='btn btn-primary'>Payment</button> : <button disabled className='btn btn-primary'>Payment</button>
                    }</td>
                </tr>)
            })}

          </tbody>
        </table>

      </div>
      <Footer/>
    </div>
  )
}
