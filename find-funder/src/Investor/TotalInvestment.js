import React, { useState, useEffect } from 'react'
import InvestorHeader from './InvestorHeader'
import axios from "axios"
import BaseURL from '../AxiosFunction';
import Footer from '../Component/Footer';

export default function TotalInvestment() {
  const [data, setdata] = useState([])


 console.log(data);
  useEffect(() => {
    console.log("useEffect called")
    const fetchData = async () => {
      try {
        const response = await BaseURL.get("/api/Investment/InvestorId");
        console.log("total investment", response);
        setdata(response.data)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();

    
  }, [])
  return (
    <div>
        <InvestorHeader/>
        <div className='App-profile'>
        <h4>Total investment</h4>
        <div>
        <br/>
        <table class="table  table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Company Name</th>
              <th scope="col">Given Equity</th>
              <th scope="col">Invested Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td>{item.companyName.charAt(0).toUpperCase() + item.companyName.slice(1)}</td>
                  <td>{item.equity}</td>
                  <td>
                    {item.amount}</td>
                </tr>)
            })}

          </tbody>
        </table>
      </div>
    
    </div>
    <Footer/>
    </div>

  )
}
