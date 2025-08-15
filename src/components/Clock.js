export default function Clock() {
  let date = new Date();
  let hours = (date.getHours() % 12 || 12).toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let am_or_pm = date.getHours() >= 12 ? 'PM' : 'AM';

  const clockDigitStyling = "text-red-500 inline-block md:text-[4.75rem] lg:text-[7.25rem] text-[3.75rem] font-bold italic";

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
