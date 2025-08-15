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
  const clockDigitStyling = "text-red-500 inline-block md:text-[7.25rem] text-[3.455rem] font-bold italic";

  // Cycle and Flash the Colon with useEffect()
  useEffect(() => {
    let visibleTimeout;
    const interval = setInterval(() => {
      setShowColon(false);
      visibleTimeout = setTimeout(() => setShowColon(true), 500);
    }, 4525); // 3s Delay on Interval

    return () => {
      clearInterval(interval);
      clearTimeout(visibleTimeout);
    }; // Clear Interval and Timeout to repeat
  }, []);

  return (
    <div
      className="clock mx-auto mt-24"
      id="clock"
      data-testid="clock"
    >
      <div className="clockCase bg-purple-950 border-2 border-gray-700 rounded-md p-6 mt-8 w-75 md:w-[800px] lg:w-[900px] m-3" data-testid="clockCase">
        <div className="backgroundLED bg-gray-950 border border-gray-500/50 rounded-md pt-8 pb-8 px-3" data-testid="backgroundLED">
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
      </div>
    </div>
  );
};
