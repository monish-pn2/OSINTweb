import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/landing_page';
import Previous from './components/previous';
import AadharResults from './components/aadhar_results';
import VehicleResults from './components/vehicle_results';
import AadharGraph from './components/aadhar_graph';
import VehicleGraph from './components/vehicle_graph';
import Profile from './components/ProfilePage';
import MailGraph from './components/email_graph';
import MailResults from './components/email_results';
import UsernameResults from './components/username_results';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import Sample from './components/sample';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/previous" element={<Previous />} />
          <Route path="/aadhar_results" element={<AadharResults />} />
          <Route path="/aadhar_graph" element={<AadharGraph />} />
          <Route path="/vehicle_graph" element={<VehicleGraph />} />
          <Route path="/vehicle_results" element={<VehicleResults />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/email_graph" element={<MailGraph />} />
          <Route path="/email_results" element={<MailResults />} />
          <Route path="/username_results" element={<UsernameResults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
