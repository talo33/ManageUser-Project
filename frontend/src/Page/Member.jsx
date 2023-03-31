import './Member.css'
import React from 'react'
import SideBar from '../Component/SideBar'
import DataGridmember from '../Component/DataGrid'



const Member = () => {
  return (
    <div className='mem-page'>
      <SideBar/>    
      <DataGridmember className="datagrid"/>   
    </div>
  )
}

export default Member
