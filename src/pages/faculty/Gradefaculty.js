import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MIL from '../../images/media1.png';
import Entrep from '../../images/entrep.png';
import PHYSICAL from '../../images/physical.png';
import PHILOSOPHY from '../../images/philo.jpg';
import SCIENCE from '../../images/chemical.jpg';
import POLITICS from '../../images/politics.png';
import RESEARCH from '../../images/research.jpg';
import LIFE from '../../images/life.jpg';
import Dashboardfaculty from '../../components/Dashboardfaculty';

function Gradefaculty() {
  return (
    <>
    <Dashboardfaculty/>
    <div className='grade-grid' style={{padding: '40px' ,paddingTop: '120px', backgroundColor:'#192841'}}>
        <Row xs={1} md={4} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={Entrep} alt="Entrepreneur" style={{height:'200px'}} />
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}>ENTREPRENEURSHIP  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Card.Title>
              <Link to = "/Enrolledlist" style={{textDecoration: 'none'}}><a href="ppp" class="btn btn-primary">Check</a></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={MIL} alt="Entrepreneur" style={{height:'200px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}>MEDIA AND INFORMATION LITERACY
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              </Card.Title>
              <Link to = "/Enrolledlist" style={{textDecoration: 'none'}}><a href="ppp" class="btn btn-primary">Check</a></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={PHYSICAL} alt="Entrepreneur" style={{height:'200px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}>PHYSICAL EDUCATION
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
              </Card.Title>
              <Link to = "/Enrolledlist" style={{textDecoration: 'none'}}><a href="ppp" class="btn btn-primary">Check</a></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={PHILOSOPHY} alt="Entrepreneur" style={{height:'200px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}>INTRODUCTION TO THE PHILOSOPHY OF HUMAN PERSON</Card.Title>
              <Link to = "/Enrolledlist" style={{textDecoration: 'none'}}><a href="ppp" class="btn btn-primary">Check</a></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={SCIENCE} alt="Entrepreneur" style={{height:'200px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}>PHYSICAL SCIENCE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Card.Title>
              <Link to = "/Enrolledlist" style={{textDecoration: 'none'}}><a href="ppp" class="btn btn-primary">Check</a></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={POLITICS} alt="Entrepreneur" style={{height:'200px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}>PHILIPPINE POLITICS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Card.Title>
              <Link to = "/Enrolledlist" style={{textDecoration: 'none'}}><a href="ppp" class="btn btn-primary">Check</a></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={RESEARCH} alt="Entrepreneur" style={{height:'200px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}>PRACTICAL RESEARCH &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </Card.Title>
              <Link to = "/Enrolledlist" style={{textDecoration: 'none'}}><a href="ppp" class="btn btn-primary">Check</a></Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={LIFE} alt="Entrepreneur" style={{height:'200px'}}/>
            <Card.Body>
              <Card.Title style={{textAlign: 'justify'}}>EARTH AND LIFE SCIENCE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Card.Title>
              <Link to = "/Enrolledlist" style={{textDecoration: 'none'}}><a href="ppp" class="btn btn-primary">Check</a></Link>
            </Card.Body>
          </Card>
        </Col>
    </Row>
</div>
</>
  )
}

export default Gradefaculty