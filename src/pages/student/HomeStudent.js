import React from 'react'
import Dashboardstudent from '../../components/Dashboardstudent';
import Wallpaper from '../../images/gray.jpg';

function HomeStudent() {
  return (
    <>
    <Dashboardstudent/>
    
    <img src={Wallpaper} alt="Wallpaper" style={{width: '100%', height:'100%',position:'fixed'}} />
    
    <div style={{padding: '40px' ,paddingTop: '300px'}}></div>
    <div style={{display:'flex', justify:'center'}}></div>
    
  </>
   
  )
}

export default HomeStudent