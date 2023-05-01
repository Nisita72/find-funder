import { Link, useNavigate, useLocation } from "react-router-dom";
// import x from "../images/logo2.png";
// import { Button } from "reactstrap";
// import { useEffect, usestate } from "react";
// import { Colors } from "chart.js";
// import Footer from "./Footer";
import { MDBIcon } from "mdb-react-ui-kit";

export default function AdminHeder() {
  const navigate = useNavigate();
  const handleChange = (value) => {
    console.log(value);
    navigate(`/${value}`);
  };

  return (
    <div className="navbar ">
   
      <div className="display-menue">
    
          
<MDBIcon fas icon="far fa-user" size="lg" />
<MDBIcon fas icon="bell" size="lg" />

      </div>
    </div>
  );
}
