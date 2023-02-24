import React from 'react'
import Table from 'react-bootstrap/Table';
import Dashboardfaculty from '../../components/Dashboardfaculty';

function Enrolledlist() {
  return (
    <>
    <div>
    <Dashboardfaculty/>
    <div style={{padding: '40px' ,paddingTop: '80px'}}></div>
    <Table>
    <thead>
      <tr>
        <th>Student Enrolled in the Subject</th>
        <th>Grades</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dela Cruz Juan A.</td>
        <td>---</td>
      </tr>
      <tr>
        <td>Veronica Maria </td>
        <td>---</td>
      </tr>
    </tbody>
  </Table>
  </div>
  </>
  )
}

export default Enrolledlist