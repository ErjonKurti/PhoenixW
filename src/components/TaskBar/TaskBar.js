import React from 'react'
import { assets } from '../../assets/assets'
import './TaskBar.css'

const TaskBar = () => {
  return (
    <div>
      <div className='taskbar'>
        <img className='desktop-icons' src={assets.bin} alt='' />
        <img className='desktop-icons' src={assets.google} alt='' />
        <img className='desktop-icons' src={assets.debian} alt='' />
        <img className='desktop-icons' src={assets.github} alt='' />
        <img className='desktop-icons' src={assets.vscode} alt='' />
        <img className='desktop-icons' src={assets.figma} alt='' />
        <img className='desktop-icons' src={assets.spotify} alt='' />
        <img className='desktop-icons' src={assets.postman} alt='' />
        <img className='desktop-icons' src={assets.settings} alt='' />
      </div>
    </div>
  )
}

export default TaskBar
