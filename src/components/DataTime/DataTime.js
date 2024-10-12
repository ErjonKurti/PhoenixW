import React from 'react';
import './DataTime.css';

const DataTime = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const currentDate = new Date();

  const day = daysOfWeek[currentDate.getDay()];
  const date = currentDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const time = currentDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div>
      <h1 className='day'>{day.toUpperCase()}</h1>
      <p className='data'>{date.toUpperCase()}</p>
      <p className='time'>{time}</p>
    </div>
  );
};

export default DataTime;
