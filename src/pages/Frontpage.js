import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
import '../styles/Frontpage.css';
function Frontpage() {
  return (
    <div className="containerw">
    <div className="img2">
      <img src={Logo} alt="logo" height="250" width="250"/>
      <h1 style={{marginTop: '17px'}}>Hello <br/> Isidorian!</h1>
    </div>
    
    <div className="btnw"> 
     <Link to="/facultylogin"><button type="submit">Faculty</button></Link>
     <Link to="/studentlogin"><button type="submit">Student</button></Link>
    </div>
  </div>
  )
}

export default Frontpage
