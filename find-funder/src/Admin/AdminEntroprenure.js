import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import BaseURL from "../AxiosFunction";
import { Button } from 'reactstrap';
import { MDBIcon } from "mdb-react-ui-kit";
import { ToastContainer, toast } from "react-toastify";

export default function AdminEntroprenure() {

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {
    try {
      const response = await BaseURL.get(
        "/api/Admin/Entrepreneur",
      );
      console.log("entreprnure", response);
      setdata(response.data.items);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleDelete = async (event, param ) => {

    if ( window.confirm("Do you Want To Delete Entreprenur!") == true) {
      try {

        let result = await  BaseURL.delete(`/api/Admin/Entrepreneur/${param}`)
        console.log("result", result);

        fetchData();
        if (result.status == 200) {
          toast.success("Entreprenur Deleted succesfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } catch (error) {
        console.log("error", error);
        toast.error("Entreprenur Not Deleted", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
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
              <th scope="col">Entreprenur Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1)}&nbsp;{item.lastName.charAt(0).toUpperCase() + item.lastName.slice(1)}</td>
                  <td>{item.email}</td>
                  <td>

                    <MDBIcon class="fas fa-trash-can"  style={{fontSize:"19px",color:"tomato"}} onClick={(event) => handleDelete(event, item.id)}   />

                    </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer/>
    </div>
  )
}
