import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboardstudent from '../../components/Dashboardstudent';
function Enrollmentform() {

  return (
    <>
    <Dashboardstudent/>
    <div style={{padding: '40px' ,paddingTop: '300px'}}></div>
<div style={{backgroundColor: 'blue', marginTop: '-40px',  marginBottom: '-40px'}}></div>
<div className='text-center'>
<form>
<Link to="/ViewEnrollment"><button type="submit" className="btn btn-block p-3" style={{backgroundColor: 'gray', color:'white'}}>VIEW ENROLLMENT</button></Link>
</form>
</div>


  </>
  )
}

export default Enrollmentform