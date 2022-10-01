import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Complaints from './components/HomePages/Complaints';
import Grievance from './components/HomePages/Grievance';
import Fraud from './components/HomePages/Fraud';
import Terms from './components/HomePages/Terms';
import PrivacyPolicy from './components/HomePages/PrivacyPolicy';
import EmailVerify from './components/HomePages/EmailVerify';
import UserDetails from './pages/Contractor/UserDetails';
import JobFeed from './pages/Contractor/JobFeed';

const App = () => {
  const [mode, setMode] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<Home mode={mode} setMode={setMode} />} exact />
      <Route path="/complaint" element={<Complaints />} />
      <Route path="/grievance" element={<Grievance />} />
      <Route path="/fraud-alert" element={<Fraud />} />
      <Route path="/terms-and-condition" element={<Terms />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/contractor/:id/verify/:token" element={<EmailVerify />} />
      <Route path="/contractor/job-feed" element={<JobFeed />} />
      <Route path="/contractor/user-details" element={<UserDetails />} />
    </Routes>
  );
};

export default App;
