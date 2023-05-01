import { Link, useNavigate, useLocation } from "react-router-dom";
import x from "../images/logo2.png";
import { Button } from "reactstrap";
import { useEffect, usestate } from "react";
import { Colors } from "chart.js";
import Footer from "./Footer";

export default function Header() {
  const navigate = useNavigate();
  const handleChange = (value) => {
    console.log(value);
    navigate(`/${value}`);
  };

  return (
    <div className="navbar ">
      <div className="logo">
        <img src={x} />
      </div>
      <div className="display-menue">
        <Link to="/" className="menue">
          Home
        </Link>
        <Link to="/contactus" className="menue">
          Contact
        </Link>
        <Link to="/faq" className="menue">
         Academy
        </Link>
        <Link to="/signIn" className="menue">
          SignIn
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
          <option selected>SignUp</option>
          <option class="dropdown-item" value="InvestorSignup">
            Investor
          </option>
          <option class="dropdown-item" value="EntrepreneurSignup">
            <h6 style={{ fontSize: 2 }}>Entreprenure</h6>
          </option>
        </select>
      </div>
    </div>
  );
}
