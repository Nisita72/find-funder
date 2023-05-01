import React from "react";
import { Link, useNavigate } from "react-router-dom";
import x from "../images/logo2.png";
export default function EntreprenureHeader() {
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
          <Link to="/homepageforEntreprenure" className="menue">
            Home
          </Link>
          <Link to="/companydetails" className="menue">
            Add Proposal
          </Link>
          <select
            class="nav-item dropdown"
            style={{
              width: 85,
              border: 0,
              backgroundColor: "white",
            }}
            onChange={(e) => handleChange(e.target.value)}
          >
            <option selected>Account</option>
            <option class="dropdown-item" value="entrepreureprofile">
              Profile
            </option>
            <option class="dropdown-item" value="entrepreureUpdateprofile">
              Update Profile
            </option>
            <option class="dropdown-item" value="entrepreurerequest">
          Request
            </option>
            <option class="dropdown-item" value="raiseinvestment">
              Investment
            </option>
            <option class="dropdown-item" value="logout">
              LogOut
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
