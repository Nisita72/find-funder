import React, { useState, useEffect } from "react";
import EntreprenureHeader from "./EntreprenureHeader";
import { Link } from "react-router-dom";
import BaseURL from "../AxiosFunction";
import Footer from "../Component/Footer";
import { ToastContainer, toast } from "react-toastify";

export default function EntreprenureRequest() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    const fetchData = async () => {
      try {
        const response = await BaseURL.get(
          "/api/RequestProposal/investorRequests"
        );
        console.log("result for entreprnure", response);
        setdata(response.data.items);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  const handleaccept = async (event, param) => {
    console.log(param);

    const payload = { investorStatusId: param, status: 2 };
    try {
      let result = await BaseURL.put("/api/RequestProposal", payload);
      console.log("result", result);

      if (result.status == 200) {
        toast.success("Request accepted succesfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
       
      } 
    } catch (error) {
      console.log("error", error);
      toast.error(" Request  Not accepted ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleReject = async (event, param) => {
    console.log(param);

    const payload = { investorStatusId: param, status: 3 };
    try {

      let result = await  BaseURL.put("/api/RequestProposal",payload ,{
      
      });
      console.log("result", result);

      if (result.status == 200) {
        toast.success("Request Rejected succesfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      
      } 
    } catch (error) {
      console.log("error", error);
      toast.error(" Request  Not Rejected ", {
        position: toast.POSITION.TOP_RIGHT,
      });

    }
  };
  return (
    <div>
      <EntreprenureHeader />
      <div className="App-profile">
        <h3 style={{ textAlign: "center" }}>Request</h3>
        <br />
        <hr />
        <table class="table  table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Number</th>
              <th scope="col">Investor Name</th>
              <th scope="col">Email</th>
              <th scope="col">Accept/Reject</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.investorName}</td>
                  <td>{item.email}</td>
                  <td>
                    {item.status === 1 ? (
                      <>
                        <button
                          onClick={(event) => handleaccept(event, item.id)}
                          disabled={false}
                          className="btn btn-success"
                        >
                          Accept
                        </button>
                        &nbsp;
                        <button
                          onClick={(event) => handleReject(event, item.id)}
                          disabled={false}
                          className="btn btn-danger"
                        >
                          Reject
                        </button>
                      </>
                    ) : item.status === 2 ? (
                      <>
                        <button
                          onClick={(event) => handleaccept(event, item.id)}
                          disabled={true}
                          className="btn btn-success"
                        >
                          Accept
                        </button>
                        &nbsp;
                        <button
                          onClick={(event) => handleReject(event, item.id)}
                          disabled={false}
                          className="btn btn-danger"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={(event) => handleaccept(event, item.id)}
                          disabled={false}
                          className="btn btn-success"
                        >
                          Accept
                        </button>
                        &nbsp;
                        <button
                          onClick={(event) => handleReject(event, item.id)}
                          disabled={true}
                          className="btn btn-danger"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  );
}
