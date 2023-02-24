import React from 'react'
import Dashboardfaculty from '../../components/Dashboardfaculty';
import Wallpaper from '../../images/gray.jpg';

function HomeFaculty() {
  return (
  <>
    <Dashboardfaculty/>
    
    <img src={Wallpaper} alt="Wallpaper" style={{width: '100%', height:'100%',position:'fixed'}} />
    <div style={{padding: '40px' ,paddingTop: '300px'}}></div>
    <div style={{display:'flex', justify:'center'}}></div>

  </>
   
  )
}

export default HomeFaculty