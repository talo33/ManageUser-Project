import React from 'react'
import SideBar from '../Component/SideBar'
import CurrentTime from './CurrentTime'
import './TimeAdmin.css'

const TimeAdmin = () => {
  return (
    <div className='dash-page'>
      <SideBar/>
      <div className='currenttime'>
        <CurrentTime/>
      </div>
    </div>
  )
}

export default TimeAdmin
