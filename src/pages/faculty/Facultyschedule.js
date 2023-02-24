import React from 'react'
import Table from 'react-bootstrap/Table';
import Dashboardfaculty from '../../components/Dashboardfaculty';

function Facultyschedule() {
  return (
    <>
    <Dashboardfaculty/>
    <div style={{padding: '40px' ,paddingTop: '70px'}}></div>
    <Table striped bordered hover style={{textAlign:'center'}}>
            <tbody>
            <tr>
                <th scope="col"><b>Time</b></th>
                <th scope="col"><b>Monday</b></th>
                <th scope="col"><b>Tuesday</b></th>
                <th scope="col">Wednesday</th>
                <th scope="col"><b>Thursday</b></th>
                <th scope="col"><b>Friday</b></th>
              </tr>
              <tr>
                <td><b>7:00AM - 7:30AM</b></td>
                <td>FLAG CEREMONY</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td><b>7:30AM - 8:45AM</b></td>
                <td colSpan={5}>GROUND BEAUTIFICATION / HOMEROOM GUIDANCE</td>
              </tr>
    
              <tr>
                <td><b>7:45AM - 8:45AM</b></td>
                <td>MEDIA AND INFORMATION LITERACY (KDVP/IBA)</td>
                <td>MEDIA AND INFORMATION LITERACY (KDVP/IBA</td>
                <td>INTRODUCTION TO THE PHILOSOPHY OF HUMAN PERSON (MGR)</td>
                <td>EARTH AND LIFE SCIENCE (EPF)</td>
                <td>MEDIA AND INFORMATION LITERACY (KDVP/IBA)</td>
              </tr>
    
              <tr>
                <td><b>8:45AM - 9:45AM</b></td>
                <td>ENTREPRENEURSHIP (LFA)</td>
                <td>ENTREPRENEURSHIP (LFA)</td>
                <td>MEDIA AND INFORMATION LITERACY (KDVP/IBA)</td>
                <td>PHYSICAL SCIENCE (RLV)</td>
                <td>ENTREPRENEURSHIP (LFA)</td>
              </tr>
              <tr>
                <td><b>9:45AM - 10:00AM</b></td>
                <td colSpan={5}><b>RECESS</b></td>
              </tr>
    
              <tr>
                <td><b>10:00AM - 11:00AM</b></td>
                <td>INTRODUCTION TO THE PHILOSOPHY OF HUMAN PERSON (MGR)</td>
                <td>EARTH AND LIFE SCIENCE (EPF)</td>
                <td>EARTH AND LIFE SCIENCE (EPF)</td>
                <td>INTRODUCTION TO THE PHILOSOPHY OF HUMAN PERSON (MGR)</td>
                <td>INTRODUCTION TO THE PHILOSOPHY OF HUMAN PERSON (MGR)</td>
              </tr>
    
              <tr>
                <td><b>11:00AM - 12:00PM</b></td>
                <td>PHYSICAL SCIENCE (RLV)</td>
                <td>PHYSICAL SCIENCE (RLV)</td>
                <td>PHYSICAL SCIENCE (RLV)</td>
                <td>PRACTICAL RESEARCH 2 (DSP)</td>
                <td>PRACTICAL RESEARCH 2 (DSP)</td>
              </tr>

              <tr>
                <td><b>12:00PM - 1:00PM</b></td>
                <td colSpan={5}><b>LUNCHBREAK</b></td>
              </tr>

              <tr>
                <td><b>1:00PM - 2:00PM</b></td>
                <td>PHILIPPINE POLITICS (MGR)</td>
                <td>ICL</td>
                <td>PHILIPPINE POLITICS (MGR)

                </td>
                <td>PHILIPPINE POLITICS (MGR)</td>
                <td>PHILIPPINE POLITICS (MGR)</td>
              </tr>
    
              <tr>
                <td><b>2:00PM - 3:00PM</b></td>
                <td>APPLIED ECONOMICS (LFA)</td>
                <td>ICL</td>
                <td>APPLIED ECONOMICS (LFA)</td>
                <td>APPLIED ECONOMICS (LFA)</td>
                <td>APPLIED ECONOMICS (LFA)</td>
              </tr>
    
              <tr>
                <td><b>3:00PM - 4:00PM</b></td>
                <td>EARTH AND LIFE SCIENCE (EPF)</td>
                <td>PRACTICAL RESEARCH 2 (DSP)</td>
                <td>PRACTICAL RESEARCH 2 (DSP)</td>
                <td>ENTREPRENEURSHIP (LFA)</td>
                <td>PHYSICAL EDUCATION (MGR)</td>
              </tr>
    
              <tr>
                <td><b>4:00PM - 4:30PM</b></td>
                <td colSpan={4}>SOLID WASTE MANAGEMENT</td>
                <td>FLAG RETREAT</td>
              </tr>
            </tbody>
    </Table>
    </>
  )
}

export default Facultyschedule