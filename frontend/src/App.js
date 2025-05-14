import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
//import UserLogin from './pages/UserLogin';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import InsuranceList from './pages/InsuranceList';
import Payment from './pages/Payment';
// import AdminAuth from './pages/AdminAuth';
import AdminDashboard from './pages/AdminDashboard';
import InsuranceDetails from './pages/InsuranceDetails';
import RenewalPage from './pages/RenewalPage';
// import UserAuth from './pages/UserAuth';
//import UserDashboard from './pages/UserDashboard';
import AdminUsers from './components/AdminUsers';
import AdminPolicies from './components/AdminPolicies';
import AdminClaims from './components/AdminClaims';
import AdminPayments from './components/AdminPayments';
import AdminRenewals from './components/AdminRenewals';
import AuthForm from './components/AuthForm';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';




import Profile from './pages/Profile';
import UserDashboard from './pages/UserDashboard';
import SelectInsurance from './pages/SelectInsurance';
import History from './pages/History';
import UserPayments from './pages/UserPayments';
import UserRenewals from './pages/UserRenewals';


import AddProduct from './pages/AddProduct';
import ManageUsers from './pages/ManageUsers';
import ViewProducts from './pages/ViewProducts';
import ViewOrders from './pages/ViewOrders';
import ViewClaims from './pages/ViewClaims';
import Settings from './pages/Settings';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/user/login" element={<UserLogin />} />
         <Route path="/user/register" element={<UserRegister />} />
           <Route path="/admin/login" element={<AdminLogin />} />
           <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<UserAuth />} /> */}
        <Route path="/insurance" element={<InsuranceList />} />
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="/admin/auth" element={<AdminAuth />} /> */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/insurance/:type" element={<InsuranceDetails />} /> {/* Dynamic route */}
        <Route path="/renew" element={<RenewalPage />} />
        {/* <Route path='/User/auth' element={<UserAuth/>}/> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="Userdashboard" element={<UserDashboard />} /> */}
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/policies" element={< AdminPolicies/>} />
        <Route path="/admin/claims" element={<AdminClaims />} />
        <Route path="/admin/payments" element={<AdminPayments />} />
        <Route path="/admin/renewals" element={<AdminRenewals />} />
        <Route path="/admin/payments" element={<AdminPayments />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/" element={<UserLogin />} /> {/* Login page */}
        <Route path="/DashboardPage" element={<DashboardPage />} /> {/* Dashboard Page */}
        <Route path="/" element={<AdminLogin />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/" element={<LoginPage />} />


          <Route exact path="/" component={AdminDashboard} />
          <Route path="/DashboardPage/UserDashboard" element={<UserDashboard />} />
        <Route path="/pages/select-insurance" element={<SelectInsurance />} />
        <Route path="/pages/profile" element={<Profile />} />
       <Route path="/history" element={<History />} />
        <Route path="/UserPayments" element={<UserPayments />} />
        <Route path="/UserRenewals" element={<UserRenewals />} />




           <Route path="/AdminDashboard/*" element={<AdminDashboard />}></Route>
            <Route path="/admin-dashboard" component={AdminDashboard} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/manage-users" component={ManageUsers} />
            <Route path="/" component={AdminDashboard} />
            <Route path="/admin-dashboard/view-products" element={<ViewProducts />} />
              <Route path="/admin-dashboard/view-orders" element={<ViewOrders />} />
              <Route path="/admin-dashboard/view-claims" element={<ViewClaims />} />
              <Route path="/admin-dashboard/settings" element={<Settings />} />
          
         
        
      </Routes>
    </Router>
  );
};

export default App;
