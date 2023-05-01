import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import x from "../images/logo2.png";
import {
    Button,
    Input
  } from "reactstrap";


export default function InvestorHeader() {
    const navigate = useNavigate();
    const handleChange = (value) => {
        console.log(value);
        navigate(`/${value}`);
      
    };
    return (
        <div>
            <div className="navbar ">
                <div className="logo">
                    <img src={x} />
                </div>
                <div className="display-menue">
                    <Link to="/homepageforInvestor" className="menue">
                        Home
                    </Link>
                    <Link to="/alldeals" className="menue">
                            Deals
               
                    </Link>

                    <select
             class="nav-item dropdown" style={{
                width:85,
                border:0,
                backgroundColor: 'white'
              }}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        <option selected>Account</option>
                        <option class="dropdown-item" value="investorrequest">
                          Request
                        </option>
                        <option class="dropdown-item" value="totalinvestment">
                        Investment
                        </option>
                        <option class="dropdown-item" value="logout">
                     LogOut
                        </option>
                    </select>

                </div>
             
            </div>


        </div>
    )
}
