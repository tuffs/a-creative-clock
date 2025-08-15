export default function Clock() {
  let date = new Date();
  let hours = (date.getHours() % 12 || 12).toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let am_or_pm = date.getHours() >= 12 ? 'PM' : 'AM';

  const clockDigitStyling = "text-red-500 inline-block text-[7rem] font-bold italic";

  return (
    <div
      className="clock"
      id="clock"
      data-testid="clock"
    >
      <div
        className={clockDigitStyling}
        data-testid="hours"
      >
        {hours}:
      </div>
      <div
        className={clockDigitStyling}
        data-testid="minutes"
      >
        {minutes}
      </div>
      <div
        className={clockDigitStyling}
        data-testid="am_or_pm"
      >
        &nbsp;{am_or_pm}
      </div>
    </div>
  );
};
