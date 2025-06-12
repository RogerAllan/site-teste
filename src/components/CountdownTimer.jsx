import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <div className="countdown-header">
        <h3>🎰 MEGA JACKPOT WEEKEND</h3>
        <p>Exclusive tournament ends in:</p>
      </div>
      <div className="countdown-timer">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="time-box">
            <div className="time-value">{String(value).padStart(2, '0')}</div>
            <div className="time-label">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
