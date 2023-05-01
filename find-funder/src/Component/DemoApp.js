
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate, NavLink } from 'react-router-dom';
import Home from './Home'
import SignIn from './SignIn'
import InvestorSignup from './InvestorSignup';
import EntrepreneurSignup from './EntrepreneurSignup';
import ForgetPassword from './ForgetPassword';
import ChangePassword from './ChangePassword';
import GetOTP from './GetOTP';
import InvestorHomePage from '../Investor/InvestorHomePage';
import EntreprenureHomePage from '../Entreprenure/EntreprenureHomePage';
import EUpdateProfile from '../Entreprenure/EUpdateProfile';
import EntreprenureProfile from '../Entreprenure/EntreprenureProfile';
import CompanyDetails from '../Entreprenure/CompanyDetails';
import EntreprenureRequest from '../Entreprenure/EntreprenureRequest';
import RaiseInvestment from '../Entreprenure/RaiseInvestment';
import AllDeals from '../Investor/AllDeals';
import InvestorRequest from '../Investor/InvestorRequest';
import TotalInvestment from '../Investor/TotalInvestment';
import ShowCompanyDetail from '../Investor/ShowCompanyDetail';
import Public from '../Investor/Public';
import Private from '../Investor/Private';
import Payment from '../Investor/Payment';
import ContactUS from './ContactUs';
import AdminDashbord from '../Admin/AdminDashbord';
import LogOut from './LogOut';
import AdminProposal from '../Admin/AdminProposal';
import AdminInvestor from '../Admin/AdminInvestor';
import AdminEntroprenure from '../Admin/AdminEntroprenure';
import AdminTotalPayment from '../Admin/AdminTotalPayment';
import FAQ from './FAQ';


// const Home = lazy(() => import('./Home'));
// const AllDeals = lazy(() => import('../Investor/AllDeals'));


function DemoApp() {
  return (
    <div>
      <Router>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactus' element={<ContactUS />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/InvestorSignup' element={<InvestorSignup />} />
          <Route path='/EntrepreneurSignup' element={<EntrepreneurSignup />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/getotp' element={<GetOTP />} />
          <Route path='/faq' element={<FAQ/>} />
          <Route path='/changepassword' element={<ChangePassword />} />
          <Route path='/homepageforEntreprenure' element={<EntreprenureHomePage />} />
          <Route path='/companydetails' element={<CompanyDetails />} />
          <Route path='/entrepreureprofile' element={<EntreprenureProfile />} />
          <Route path='/entrepreurerequest' element={<EntreprenureRequest />} />
          <Route path='/raiseinvestment' element={<RaiseInvestment />} />
          <Route path='/homepageforInvestor' element={<InvestorHomePage />} />
          <Route path='/alldeals' element={<AllDeals />} />
          <Route path='/publicdeal' element={<Public />} />
          <Route path='/privatedeal' element={<Private />} />
          <Route path='/alldeals/showcompanydetail/:id' element={<ShowCompanyDetail />} />
          <Route path='/publicdeal/showcompanydetail/:id' element={<ShowCompanyDetail />} />
          <Route path='/privatedeal/showcompanydetail/:id' element={<ShowCompanyDetail />} />
          <Route path='/investorrequest' element={<InvestorRequest />} />
          <Route path='/totalinvestment' element={<TotalInvestment />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/admin' element={<AdminDashbord />} />
          <Route path='/adminPayment' element={<AdminTotalPayment/>} />
          <Route path='/adminInvestor' element={<AdminInvestor />} />
          <Route path='/adminProposal' element={<AdminProposal/>} />
          <Route path='/adminEntroprenure' element={<AdminEntroprenure />} />
          <Route path='/logout' element={<LogOut />} />
          <Route path='/entrepreureUpdateprofile' element={<EUpdateProfile />} />
        </Routes>
        {/* </Suspense> */}
      </Router>

    </div>
  )
}
export default DemoApp