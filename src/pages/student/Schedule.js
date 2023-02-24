import React from 'react'
import Table from 'react-bootstrap/Table';
import Dashboardstudent from '../../components/Dashboardstudent';

function Schedule() {
  return (
    <>
    <Dashboardstudent/>
    <div style={{padding: '40px' ,paddingTop: '70px'}}></div>

    <Table striped bordered hover >
            <tbody>
            <tr>
                <th scope="col"></th>
                <th scope="col"><b>SUBJECT</b></th>
                <th scope="col"><b>SCHEDULE</b></th>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>ENTREPRENEURSHIP</td>
                <td>MON-FRI <br/> 7:30AM - 8:30AM</td>
              </tr>
    
              <tr>
                <th scope="row">2</th>
                <td>MEDIA AND INFORMATION LITERACY</td>
                <td>MON-FRI <br/> 8:30AM - 9:30AM</td>
              </tr>
    
              <tr>
                <th scope="row"></th>
                <td><b>RECESS</b></td>
                <td>9:30AM - 10:00AM</td>
              </tr>
    
              <tr>
                <th scope="row">3</th>
                <td>PHYSICAL EDUCATION</td>
                <td>MON-FRI <br/> 10:00AM - 11:00AM</td>
              </tr>
    
              <tr>
                <th scope="row">4</th>
                <td>INTRODUCTION TO THE PHILOSOPHY OF HUMAN PERSON</td>
                <td>MON-FRI <br/> 11:00AM - 12:00PM</td>
              </tr>
    
              <tr>
                <th scope="row"></th>
                <td><b>LUNCHBREAK</b></td>
                <td>12:00PM - 1:00PM</td>
              </tr>
    
              <tr>
                <th scope="row">5</th>
                <td>PHYSICAL SCIENCE</td>
                <td>MON-FRI <br/> 1:00PM - 2:00PM</td>
              </tr>
    
              <tr>
                <th scope="row">6</th>
                <td>PHILIPPINE POLITICS</td>
                <td>MON-FRI <br/> 2:00PM - 3:00PM</td>
              </tr>
    
              <tr>
                <th scope="row">7</th>
                <td>PRACTICAL RESEARCH</td>
                <td>MON-FRI <br/> 3:00PM - 4:00PM</td>
              </tr>
    
              <tr>
                <th scope="row">8</th>
                <td>EARTH AND LIFE SCIENCE</td>
                <td>MON-FRI <br/> 4:00PM - 5:00PM</td>
              </tr>
            </tbody>
    </Table>
    </>
  )
}

export default Schedule