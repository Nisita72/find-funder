import React from 'react'
import { Nav,NavItem,NavLink } from 'reactstrap'
import AdminHeder from './AdminHeder'
import x from "../images/logo2.png";

export default function Sidebar() {
  return (
    <div>
  <AdminHeder/>
      <div className='sidebar'>
      <div className="logo">
        <img src={x} />
      </div>
   <Nav vertical>
  <NavItem>

    <NavLink style={{color:"black"}} href="/admin">
  Dashbord
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink style={{color:"black"}} href="/adminEntroprenure">
Entreprenur
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink style={{color:"black"}} href="/adminInvestor">
Investor
    </NavLink>
  </NavItem>
  <NavItem>
  
    <NavLink style={{color:"black"}} href="/adminProposal">
Company Proposal
    </NavLink>
  </NavItem>
  <NavItem>
  
  <NavLink style={{color:"black"}} href="/adminPayment">
Investment
  </NavLink>
</NavItem>
  <NavItem>
    <NavLink 
   style={{color:"black"}}
      href="/logout"
    >
    Logout
    </NavLink>
  </NavItem>
</Nav>
   </div>
   
    </div>
  )
}
