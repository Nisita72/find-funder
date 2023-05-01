import EntreprenureHeader from "./EntreprenureHeader";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import BaseURL from "../AxiosFunction";
import axios from "axios";
import Footer from "../Component/Footer";
import { MDBSpinner } from "mdb-react-ui-kit";
import { ToastContainer, toast } from "react-toastify";

export default function Profile() {
  const [name, setName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect called");
    const fetchData = async () => {
      try {
        const response = await BaseURL.get(
          "/api/CompanyProposal/myCompanyProposal"
        );
        console.log("response", response);
        setIsLoading(false);
        setName(response.data);
        console.log(response.data);
        localStorage.setItem("companyid", response.data.id);
      } catch (error) {
        toast.error("Somthing Went Wrong", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    };

    fetchData();
  }, []);
  console.log(name);
  let key = Object.keys(name);

  console.log("keys", key);
  let values = Object.values(name);
  console.log("values", values);

  return (
    <div>
      <EntreprenureHeader />
      {/* {isLoading ? (
        <div className="App-payment">
          <MDBSpinner color="primary">
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      ) : ( */}
        <div className="App-payment">
          <h3 style={{ textAlign: "center" }}>Proposal</h3>
          <hr />
          <Table bordered>
            <thead class="table-dark">
              <tr>
                <th>Title</th>
                <th>Proposal Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {Object.keys(name).map((key, i) => {
                    if (
                      key != "address" &&
                      key != "description" &&
                      key != "pinCode" &&
                      key != "logo" &&
                      key != "detail" &&
                      key != "pitchDocument" &&
                      key != "pitchDocument"
                    ) {
                      console.log("key", key);
                      return (
                        <p key={i}>
                          <span>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </span>
                        </p>
                      );
                    }
                  })}
                </td>
                <td>
                  {Object.keys(name).map((key, i) => {
                    if (
                      key !== "address" &&
                      key !== "description" &&
                      key !== "pinCode" &&
                      key !== "logo" &&
                      key !== "detail" &&
                      key !== "pitchDocument" &&
                      key !== "pitchDocument" &&
                      key !== "isPublic" &&
                      key !== "businessType" &&
                      key !== "startDate" &&
                      key !== "endDate" &&
                      key !== "startupDate"
                    ) {
                      console.log("key", name[key]);
                      return (
                        <p key={i}>
                          <span>{name[key]}</span>
                        </p>
                      );
                    } else if (key === "isPublic") {
                      return (
                        <p key={i}>
                          <span>{name[key] ? "public" : "private"}</span>
                        </p>
                      );
                    } else if (key === "businessType") {
                      return (
                        <p key={i}>
                          <span>
                            {name[key] === 0
                              ? "Product Based"
                              : "Service Based"}
                          </span>
                        </p>
                      );
                    } else if (
                      key === "startDate" ||
                      key === "endDate" ||
                      key === "startupDate"
                    ) {
                      return (
                        <p key={i}>
                          <span>
                            {name[key]?.slice(0, name[key].indexOf("T"))}
                          </span>
                        </p>
                      );
                    }
                  })}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      {/* )} */}
      <Footer />
      <ToastContainer/>
    </div>
  );
}
