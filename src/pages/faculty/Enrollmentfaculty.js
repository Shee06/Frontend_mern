import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboardfaculty from '../../components/Dashboardfaculty';

function Enrollmentfaculty() {
  return (
    <>
    <Dashboardfaculty/>
    <div style={{padding: '40px' ,paddingTop: '300px'}}></div>
<div style={{backgroundColor: 'blue', marginTop: '-40px',  marginBottom: '-40px'}}></div>
<div className='text-center'>
<form>
<Link to="/manageenroll"><button type="submit" className="btn btn-primary btn-block " style={{backgroundColor: '#004aad', color:'black'}}>GRADE 11</button></Link>
<Link to="/manageenroll"><button type="submit" className="btn btn-primary btn-block " style={{backgroundColor: '#004aad', color:'black'}}>GRADE 12</button></Link>
</form>
</div>


  </>
  )
}

export default Enrollmentfaculty