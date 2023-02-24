import React from 'react';
import Frontpage from './pages/Frontpage';
import Studentlogin from './pages/student/Studentlogin';
import {BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import Facultylogin from './pages/faculty/Facultylogin';
import Dashboardstudent from './components/Dashboardstudent';
import Dashboardfaculty from './components/Dashboardfaculty';
import Gradefaculty from './pages/faculty/Gradefaculty';
import Gradestudent from './pages/student/Gradestudent';
import Accountstudent from './pages/student/Accountstudent';
import Accountfaculty from './pages/faculty/Accountfaculty';
import Schedule from './pages/student/Schedule';
import Facultyschedule from './pages/faculty/Facultyschedule';
import Enrollmentform from './pages/student/Enrollmentform';
import Enrolledlist from './pages/faculty/Enrolledlist';
import Enrollmentfaculty from './pages/faculty/Enrollmentfaculty';
import Manageenroll from './pages/faculty/Manageenroll';
import ViewEnrollment from './pages/student/ViewEnrollment';
import Table from './pages/faculty/Table';
import HomeStudent from './pages/student/HomeStudent';
import HomeFaculty from './pages/faculty/HomeFaculty';

import HealthList from './components/health-list.component';
import EditHealth from './components/edit-health.component';
import CreateHealth from './components/create-health.component';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage/>}/>
        <Route path="/studentlogin" element={<Studentlogin/>}/>
        <Route path="/facultylogin" element={<Facultylogin/>}/>
        <Route path="/dashboardstudent" element={<Dashboardstudent/>}/>
        <Route path="/dashboardfaculty" element={<Dashboardfaculty/>}/>
        <Route path="/gradefaculty" element={<Gradefaculty/>}/>
        <Route path="/gradestudent" element={<Gradestudent/>}/>
        <Route path="/accountstudent" element={<Accountstudent/>}/>
        <Route path="/accountfaculty" element={<Accountfaculty/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/facultyschedule" element={<Facultyschedule/>}/>
        <Route path="/enrollmentform" element={<Enrollmentform/>}/>
        <Route path="/enrolledlist" element={<Enrolledlist/>}/>
        <Route path="/enrollmentfaculty" element={<Enrollmentfaculty/>}/>
        <Route path="/manageenroll" element={<Manageenroll/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/viewenrollment" element={<ViewEnrollment/>}/>
        <Route path="/homestudent" element={<HomeStudent/>}/>
        <Route path="/homefaculty" element={<HomeFaculty/>}/>
        <Route path="/*" element={<h1>PAGE NOT FOUND</h1>}/>
        <Route path="/health" exact element={<HealthList/>} />
        <Route path="/edit/:id" element={<EditHealth/>} />
        <Route path="/create" element={<CreateHealth/>} />
        </Routes>
    </Router>
</div>
  );
}

export default App;
