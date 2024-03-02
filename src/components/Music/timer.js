import React, { useState, useEffect } from 'react';
import Preloader from '../Common/Preloader/Preloader';
const Timer = ({ isLoading, user , setUser }) => {
  const initialTimerCount = 30;
  const [timerCount, setTimerCount] = useState(initialTimerCount);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timerCount > 0) {
        console.log('TICK')
        setTimerCount((timerCount) => timerCount - 1);
      }
      else setUser(null) 
    }, 1000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [timerCount , user]);

  useEffect(() => {
    setTimerCount(initialTimerCount);
  }, [user]);

  return (
    <div className='timer'>     
     <div>Timer untill reset: <span>{timerCount}</span></div>
    </div>
  );
};

export default Timer;
