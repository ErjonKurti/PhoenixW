import React, { useState, useEffect } from 'react'; // Added the missing import
import { assets } from '../assets/assets'; // Ensure assets are correctly imported
import './WPagesPhones.css'; // Import the CSS for styling

const SpidermanPhonesW = () => {
  const [currentTime, setCurrentTime] = useState(''); // Time state
  const [currentDate, setCurrentDate] = useState(''); // Date state
  const [battery, setBattery] = useState(0); // Battery state

  // Generate current time and date
  const updateTime = () => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
    setCurrentTime(time);
    setCurrentDate(date);
  };

  // Generate random battery percentage between 50% and 100%
  const generateBattery = () => {
    const randomBattery = Math.floor(Math.random() * 51) + 50; // Random percentage between 50 and 100
    setBattery(randomBattery);
  };

  // Update time every minute and battery when the component mounts
  useEffect(() => {
    updateTime();
    generateBattery();
    const intervalId = setInterval(updateTime, 60000); // Update time every 60 seconds
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='ph-container'>
      <div className="iphone-container">
        <div className="iphone-notch"></div>
        <div className="iphone-screen">
          <div className="lock-screen">
            <div className="lock-time">{currentTime}</div>
            <div className="lock-date">{currentDate}</div>
          </div>
          <video autoPlay muted loop className="wallpaper-video">
            <source src={assets.spiderman_phones} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="iphone-buttons"></div>
      </div>
      <div className='free-download'>
        <h2>SPIDERMAN WALLPAPER </h2>
        <p>Spiderman live Wallpaper 4k for free, Download below: </p>
        <button>
          <a href={assets.spiderman_phones} download>Free Download</a>
        </button>
      </div>
    </div>
  );
};

export default SpidermanPhonesW;
