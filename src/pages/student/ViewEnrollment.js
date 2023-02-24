import React from 'react'
import Dashboardstudent from '../../components/Dashboardstudent';

function ViewEnrollment() {
  return (
    <>
    <Dashboardstudent/>
    <div style={{padding: '40px' ,paddingTop: '70px'}}></div>
<div style={{display:'flex', justify:'center'}}>
    <form style={{margin:'0 auto'}}>
        <table border="1" >
            <tr>
                <td>
                    <p>
                        <label for="Fullname"> &nbsp;&nbsp;&nbsp; Full Name:</label><input id='Fullname' type="text" placeholder='Please type your full name' required/>
                        </p>
                        <p>
                        <label for="select_year">&nbsp;&nbsp;&nbsp; Year: </label>
                        </p>
                        <p>
                        <label for="select_semester">&nbsp;&nbsp;&nbsp; Semester: </label>
                        </p>
                        <p>
                        <label for="select_schoolYear">&nbsp;&nbsp;&nbsp; School Year: </label>
                        </p>
           
                        <table border="1">
                            <tr>
                                <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
                                <th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</th>
                                <th>Subject Description</th>
                                <th>Schedule</th>
                            </tr>

                            <tr>
                                <td align="center">1</td>
                                <td>
                                    <p align="center"><input name="checkbox" type="checkbox" checked/></p>
                                </td>
                                <td >ENTREPRENEURSHIP</td>
                                <td>[37] BSIT-UQ-3-1 | W 07:30AM-10:30AM</td>
                            </tr>
                            <tr>
                                <td align="center"> 2 </td>
                                <td>
                                    <p align="center"><input name="checkbox" type="checkbox" checked/></p>
                                </td>
                                <td >MEDIA AND INFORMATION LITERACY</td>
                                <td>[36] BSIT-UQ-3-1 | T/TH/S 07:30PM-09:00PM</td>
                            </tr>
                            <tr>
                                <td align="center">3</td>
                                <td>
                                    <p align="center"><input name="checkbox" type="checkbox" checked/></p>
                                </td>
                                
                                <td >PHYSICAL EDUCATION</td>
                                <td>[36] BSIT-UQ-3-1 | S 07:30AM-10:30AM</td>
                            </tr>
                            <tr>
                                <td align="center">4</td>
                                <td>
                                    <p align="center"><input name="checkbox" type="checkbox" checked/></p>
                                </td>
                              
                                <td>INTRODUCTION TO THE PHILOSOPHY OF HUMAN PERSON</td>
                                <td>[36] BSIT-UQ-3-1 |T/T 07:30AM-9:30AM/11:00AM-02:00PM</td>
                            </tr>
                            <tr>
                                <td align="center">5</td>
                                <td>
                                    <p align="center"><input name="checkbox" type="checkbox" checked/></p>
                                </td>
                               
                                <td>PHYSICAL SCIENCE</td>
                                <td>[36] BSIT-UQ-3-1 | W/W 01:00PM-03:00PM/03:00PM-06:00PM</td>
                            </tr>
                            <tr>
                                <td align="center">6</td>
                                <td>
                                    <p align="center"><input name="checkbox" type="checkbox" checked/></p>
                                </td>
                                
                                <td>PHILIPPINE POLITICS</td>
                                <td>[36] BSIT-UQ-3-1 | M 07:30AM-10:30AM</td>
                            </tr>
                            <tr>
                                <td align="center">7</td>
                                <td>
                                    <p align="center"><input name="checkbox" type="checkbox" checked/></p>
                                </td>
                               
                                <td>PRACTICAL RESEARCH</td>
                                <td>[36] BSIT-UQ-3-1 | S/S 01:00PM-03:00PM/03:00PM-06:00PM</td>
                            </tr>
                        </table>
                        &nbsp;
                        <p style={{textAlign:'center'}}><input type="submit" /> <input type="reset"/></p>
                    </td>
                </tr>
        </table>
    </form>
    </div>
    </>
  )
}

export default ViewEnrollment