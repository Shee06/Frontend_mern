import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboardfaculty from '../../components/Dashboardfaculty';

function Manageenroll() {
  return (
    <>
    <Dashboardfaculty/>
    <div style={{padding: '40px' ,paddingTop: '300px'}}></div>
<div style={{backgroundColor: 'blue', marginTop: '-40px',  marginBottom: '-40px'}}></div>
<div className='text-center'>
<form>
<Link to="/Table"><button type="submit" className="btn btn-block p-3" style={{backgroundColor: 'gray', color:'white'}}>Manage Enrollment</button></Link>
<button type="submit" className="btn btn-block p-3" style={{backgroundColor: 'gray', color:'white'}}>View Enrollment History</button>
</form>
</div>

  </>
  )
}

export default Manageenroll