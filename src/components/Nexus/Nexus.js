import React from 'react'
import { assets } from '../../assets/assets'
import './Nexus.css'

const Nexus = () => {
  return (
    <>
      <div className='nexus'>
        <a href={assets.AssetsW} download>
          <p>-Download Assets-</p>
        </a>
      </div>
    </>
  )
}

export default Nexus
