import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
import Profile from '../images/profile.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

function Dashboardfaculty() {
  return (
    <>
    <Navbar className='fixed-top' collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: '#004aad'}} >
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="Logo" width="50" height="50"/>School Portal</Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" style={{width: '70px'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"  aria-label="Toggle navigation"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to = "/HomeFaculty" style={{textDecoration: 'none'}}><Nav.Link href="#pricing">Home</Nav.Link></Link>
            <Link to = "/Enrollmentfaculty" style={{textDecoration: 'none'}}><Nav.Link href="#pricing">Enrollment</Nav.Link></Link>
            <Link to = "/Facultyschedule" style={{textDecoration: 'none'}}><Nav.Link href="#pricing">Schedule</Nav.Link></Link>
            <Link to = "/gradefaculty" style={{textDecoration: 'none'}}><Nav.Link href='gradefaculty'>Grades</Nav.Link></Link>
            <Link to = "/Accountfaculty" style={{textDecoration: 'none'}}><Nav.Link eventKey={2} href="#memes">Account</Nav.Link></Link>
            </Nav>

            <Nav>
            <Nav.Link href="#deets">Announcement</Nav.Link>
            </Nav>

            <Nav>
        <NavDropdown title={<img src={Profile} alt="Profile" width="30" height="30"/>} id="basic-nav-dropdown">
        <NavDropdown.Item href="action1">Profile</NavDropdown.Item>
        <Link to = "/Facultylogin" style={{textDecoration: 'none'}}><NavDropdown.Item href="action2">Log Out</NavDropdown.Item></Link>
        </NavDropdown>
           </Nav>
         
        </Navbar.Collapse>
    
      </Container>
    </Navbar>
    </>
  )
}

export default Dashboardfaculty