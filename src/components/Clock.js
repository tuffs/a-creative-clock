export default function Clock() {
  let date = new Date();
  let hours = date.getHours() % 12 || 12;
  let minutes = date.getMinutes();
  let am_or_pm = date.getHours() >= 12 ? 'PM' : 'AM';

  return (
    <div
      className="clock"
      id="clock"
      data-testid="clock"
    >
      <div
        style={{ display: 'inline-block' }}
        data-testid="hours"
      >
        {hours}:
      </div>
      <div
        style={{ display: 'inline-block' }}
        data-testid="minutes"
      >
        {minutes}
      </div>
      <div
        style={{ display: 'inline-block' }}
        data-testid="am_or_pm"
      >
        {am_or_pm}
      </div>
    </div>
  );
};
