import React from 'react'
import { assets } from '../assets/assets'
import DataTime from '../components/DataTime/DataTime'
import TaskBar from '../components/TaskBar/TaskBar'
import Nexus from '../components/Nexus/Nexus'

const GokuVegetaW = () => {
  return (
    <div className='wallpaper'>
      <div className="content">
        <DataTime />
        <TaskBar />
        <Nexus />
      </div>
      <video className="video" autoPlay loop muted>
        <source src={assets.goku_vegeta} type="video/mp4" />
      </video>
    </div>
  )
}

export default GokuVegetaW
