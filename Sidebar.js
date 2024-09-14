import React from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
    <div className='col-md-2' style={{height:'800px',background:'black',color:'white'}}>
    <div className='menu'>
    <img src="./image/img11.JPEG" style={{height:'80px',width:'200px'}}/>
    
      <ul>
      <Link to="attendance"><li>Takeattendence</li></Link>
      <Link to="report"><li>Report</li></Link>
      <Link to="student"><li>Student</li></Link>
      <Link to="Addstudent"><li>Addstudent</li></Link>
      </ul>
    </div>
    
    </div>

    </>
  )
}
