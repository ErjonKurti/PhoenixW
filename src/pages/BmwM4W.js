import React from 'react'
import { assets } from '../assets/assets'
import './WPages.css'
import DataTime from '../components/DataTime/DataTime'
import TaskBar from '../components/TaskBar/TaskBar'
import Nexus from '../components/Nexus/Nexus'

const BmwM4W = () => {
  return (
    <div className='wallpaper'>
      <div className="content">
        <DataTime />
        <TaskBar />
        <Nexus />
      </div>
      <video className="video" autoPlay loop muted>
        <source src={assets.bmwm4} type="video/mp4" />
      </video>
    </div>
  )
}

export default BmwM4W
