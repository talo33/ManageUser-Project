import React from 'react'
import SideBarUser from '../Component/SideBarUser'
import './Weather.css'
import CurrentTime from './CurrentTime'
const AboutTL = () => {
  return (
    <div className='AboutTL-page '>
        <SideBarUser/>
        <div className="current-time">
          <CurrentTime/>
        </div>
    </div>
  )
}

export default AboutTL
