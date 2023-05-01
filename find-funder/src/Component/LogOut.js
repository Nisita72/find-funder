import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function LogOut() {
    const navigate = useNavigate();
    useEffect(()=>{
        localStorage.removeItem("login");
        navigate("/signIn");
    })
  return (
    <div>
      
    </div>
  )
}
