import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signupone from './page/signupone';
import Signuptwo from './page/signuptwo';
import Login from './page/login';
import Profileuseredit from './page/profileuseredit';
import Profileuser from './page/profileuser';
import Profilevolunteeredit from './page/profilevolunteeredit';
import Profilevolunteer from './page/profilevolunteer';
import Adminone from './page/adminone';
import Admintwo from './page/admintwo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signupone" element={<Signupone />} />
        <Route path="/signuptwo" element={<Signuptwo />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profileuseredit" element={<Profileuseredit />} />
        <Route path="/Profileuser" element={<Profileuser />} />
        <Route path="/Profilevolunteeredit" element={<Profilevolunteeredit />} />
        <Route path="/Profilevolunteer" element={<Profilevolunteer />} />
        <Route path="/adminone" element={<Adminone />} />
        <Route path="/admintwo" element={<Admintwo />} />
      </Routes>
    </Router>
  );
}

export default App;
