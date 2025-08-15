import { useState, useEffect } from 'react';

export default function Clock() {
  let date = new Date();
  let hours = (date.getHours() % 12 || 12).toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let am_or_pm = date.getHours() >= 12 ? 'PM' : 'AM';

  const clockDigitStyling = "text-red-500 inline-block md:text-[4.75rem] lg:text-[7.25rem] text-[3.75rem] font-bold italic";

  // Colon flashing logic
  const [showColon, setShowColon] = useState(true);

  // useEffect to cycle/flash the Colon
  useEffect(() => {
    let visibleTimeout;
    const interval = setInterval(() => {
      setShowColon(false);
      visibleTimeout = setTimeout(() => setShowColon(true), 500)
    }, 10000); // Every 3s

    return () => {
      clearInterval(interval);
      clearTimeout(visibleTimeout);
    };
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
