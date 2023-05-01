import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Row,Col,Button, Container } from 'reactstrap'
import EntreprenureHeader from './EntreprenureHeader';
import { ChartJs,Tooltip,Title,ArcElement,Legend} from 'chart.js'
import Chart from 'chart.js/auto'
import { Pie } from 'react-chartjs-2'
import BaseURL from '../AxiosFunction';
import Footer from '../Component/Footer';
Chart.register(Tooltip,Title,ArcElement,Legend);


export default function RaiseInvestment() {
  const [data, setdata] = useState([])
  const[investdata,setInvestdata]=useState()
  const[newData,setNewData]=useState([])

 console.log("data",data);
 console.log("newdata",newData);
  useEffect(() => {
    console.log("useEffect called")
    const fetchData = async () => {
      try {
        const response = await BaseURL.get("/api/Investment/getAllProposalInvestment");
        console.log("entreprenure raiseamount", response);
        setdata(response.data.items)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();

// -------investmentstatastic-------//
    const investmentdata = async () => {
      try {
        const response = await BaseURL.get("/api/InvestmentStatistics/getProposalStatistics");
        console.log("total investment", response);
        setInvestdata(response.data)
          const investmentData=Object.values(response.data);
          console.log("arr",investmentData);
          setNewData(investmentData)
      } catch (error) {
        console.log("error", error);
      }
    };
    investmentdata ();
    
  }, [])


  const amountdata = {
    datasets: [{
        data: [newData[4],newData[5]],
        backgroundColor:["SteelBlue","skyblue"]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Raise Amount',
        'Remaine Amount',
        
    ]
};
 
const equitydata = {
  datasets: [{
      data: [newData[2],newData[3]],
      backgroundColor:["SteelBlue","skyblue"]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Given Equity',
      'Remaining Equity', 
      
  ]
};
 
  return (
    <div>
         <EntreprenureHeader/>
        <div className='App-profile'>
        <h4>Investments</h4>
        <div>
        <br/>
        <table class="table  table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Proposal Name</th>
              <th scope="col">Investor Name</th>
              <th scope="col">Invested </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item,index) => {
              return (
                <tr>
                  <td>{index+1}</td>
                  <td>{item.comapnayName.charAt(0).toUpperCase() + item.comapnayName.slice(1)}</td>
                  <td>{item.investorName.charAt(0).toUpperCase() + item.investorName.slice(1)}</td>
                  <td>
                    {item.amount}</td>
                </tr>)
            })}

          </tbody>
        </table>
      </div>
      
      <div >
        <br/>
<br/>
<div>
        <Row  xs="2"  >
          <Col style={{width:'40%',height:'40%' ,margin:'auto'}}>
        <Pie data={amountdata}/>
        <br/>
        <h6 style={{textAlign:"center"}}>Raise Amount</h6>
        </Col>
        <Col style={{width:'40%',height:'40%' ,margin:'auto'}} >
        <Pie data={equitydata}/>
        <br/>
        <h6 style={{textAlign:"center"}}>Given Equity</h6>
        </Col>
        </Row>
</div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}
