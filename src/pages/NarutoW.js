import React from 'react'
import { assets } from '../assets/assets'
import './WPages.css'
import DataTime from '../components/DataTime/DataTime'
import TaskBar from '../components/TaskBar/TaskBar'
import Nexus from '../components/Nexus/Nexus'

const NarutoW = () => {
  return (
    <div className='wallpaper'>
      <div className="content">
        <DataTime />
        <TaskBar />
        <Nexus />
      </div>
      <video className="video" autoPlay loop muted>
        <source src={assets.naruto} type="video/mp4" />
      </video>
    </div>
  )
}

export default NarutoW
