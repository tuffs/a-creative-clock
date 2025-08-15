import { useState, useEffect } from 'react';

export default function Clock() {
  // Colon flashing logic
  const [showColon, setShowColon] = useState(true);
  const [date, setDate] = useState(new Date());

  // Update the Time in useEffect()
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000); // Update date.
    return () => clearInterval(timer);
  }, []);

  // Interval update, updates: hours, minutes, and am or pm
  let hours = (date.getHours() % 12 || 12).toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let am_or_pm = date.getHours() >= 12 ? 'PM' : 'AM';

  // Convenient, consistent styling
  const clockDigitStyling = "text-red-500 inline-block md:text-[4.75rem] lg:text-[7.25rem] text-[3.75rem] font-bold italic";

  // Cycle and Flash the Colon with useEffect()
  useEffect(() => {
    let visibleTimeout;
    const interval = setInterval(() => {
      setShowColon(false);
      visibleTimeout = setTimeout(() => setShowColon(true), 500)
    }, 10000); // 3s Delay on Interval

    return () => {
      clearInterval(interval);
      clearTimeout(visibleTimeout);
    }; // Clear Interval and Timeout to repeat
  }, []);

  return (
    <div
      className="clock"
      id="clock"
      data-testid="clock"
    >

      <div
        id="current_time_is__statement"
        className="text-[13px] md:text-[20px] lg:text-[27px]"
        style={{
          fontFamily: 'sans-serif',
        }}
      >
        The current time is ...
      </div>

      <div id="clockTimeDisplay" data-testid="clock_time_display">
        <div
          className={`${clockDigitStyling}`}
          data-testid="hours"
        >
          {hours}
        </div>
        <div
          className={`${clockDigitStyling}`}
          data-testid="colon_seperator"
          style={{ visibility: showColon ? 'visible' : 'hidden' }}
        >
          &nbsp;:&nbsp;
        </div>
        <div
          className={`${clockDigitStyling}`}
          data-testid="minutes"
        >
          {minutes}
        </div>
        <div
          className={`${clockDigitStyling}`}
          data-testid="am_or_pm"
        >
          &nbsp;{am_or_pm}
        </div>
      </div>
    </div>
  );
};
