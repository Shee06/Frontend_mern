import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';
import '../../styles/Studentlogin.css';

function Studentlogin() {
  return (
    <div>
    <form>
  <div class = "container">
    <div class="img1">
       <img src={Logo} alt="Logo" width="200" height="200" />
    </div>
    
    <h1> Log In </h1>
    
      <label for="lrn" ><b>LRN: </b></label><br/>
      <input type="id" placeholder="Enter your LRN" name="lrn" required/><br/>
    
      <label for="email"><b> Email: </b></label> <br/>
      <input type="email" placeholder="Enter your Email" name="email" required/><br/>
      
      <label for="password"><b>Password: </b></label><br/>
      <input type="password" placeholder="Please type your Password" name="password" required/><br/>
  
   </div>
   <div id="submitbtn">
   <Link to = "/Dashboardstudent" style={{textDecoration: 'none'}}><button type="submit">Login</button></Link>
    </div>
</form>
</div>
  )
}

export default Studentlogin