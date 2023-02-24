import React from 'react';
import Table from 'react-bootstrap/Table';
import Dashboardstudent from '../../components/Dashboardstudent';

function Gradestudent() {
  return (
    <>
    <Dashboardstudent/>
    <div style={{padding: '40px' ,paddingTop: '70px'}}></div>
    <Table striped bordered hover >
    <tbody>
    <tr>
        <th scope="col"></th>
        <th scope="col"><b>SUBJECT</b></th>
        <th scope="col"><b>GRADES</b></th>
      </tr>
      <tr>
        <th>1</th>
        <td>ENTREPRENEURSHIP </td>
        <td>90</td>
      </tr>

      <tr>
        <th>2</th>
        <td>MEDIA AND INFORMATION LITERACY</td>
        <td>89</td>
      </tr>

      <tr>
        <th>3</th>
        <td>PHYSICAL EDUCATION</td>
        <td>96</td>
      </tr>

      <tr>
        <th>4</th>
        <td>INTRODUCTION TO THE PHILOSOPHY OF HUMAN PERSON</td>
        <td>92</td>
      </tr>

      <tr>
        <th>5</th>
        <td>PHYSICAL SCIENCE</td>
        <td>93</td>
      </tr>

      <tr>
        <th>6</th>
        <td>PHILIPPINE POLITICS</td>
        <td>85</td>
      </tr>

      <tr>
        <th>7</th>
        <td>PRACTICAL RESEARCH</td>
        <td>97</td>
      </tr>

      <tr>
        <th>8</th>
        <td>EARTH AND LIFE SCIENCE</td>
        <td>90</td>
      </tr>

      <tr>
        <td colSpan={'2'}></td>
        <th>Total Average:</th>
      </tr>
    </tbody>
</Table>
</>
  )
}

export default Gradestudent