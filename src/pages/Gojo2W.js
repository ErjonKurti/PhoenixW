import React from 'react'
import { assets } from '../assets/assets'
import './WPages.css'
import DataTime from '../components/DataTime/DataTime'
import TaskBar from '../components/TaskBar/TaskBar'
import Nexus from '../components/Nexus/Nexus'

const Gojo2W = () => {
  return (
    <div className='wallpaper'>
      <div className="content">
        <DataTime />
        <TaskBar />
        <Nexus />
      </div>
      <video className="video" autoPlay loop muted>
        <source src={assets.gojo2} type="video/mp4" />
      </video>
    </div>
  )
}

export default Gojo2W
