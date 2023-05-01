import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import BaseURL from "../AxiosFunction";
import { Button } from 'reactstrap';

export default function AdminTotalPayment() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {
    try {
      const response = await BaseURL.get(
        "/api/Admin/Investment",
      );
      console.log("investment", response);
      setdata(response.data.items);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <Sidebar/>
      <div className='main'>
      <table class="table  table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Company Name</th>
              <th scope="col">Invested Amount</th>
              <th scope="col">Given Equity</th>

            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.companyName.charAt(0).toUpperCase() + item.companyName.slice(1)}</td>
                  <td>{item.amount}</td>
                  <td>{item.equity}</td>
                
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
