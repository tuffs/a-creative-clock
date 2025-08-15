export default function Clock() {
  const hour = 12;
  const minute = 30;
  const ampm = "PM";

  return (
    <div className="clock" id="clock" data-testid="clock">
      <div style={{ display: 'inline-block' }}>
        {hour}:
      </div>
      <div style={{ display: 'inline-block' }}>
        {minute}
      </div>
      <div style={{ display: 'inline-block' }}>
        {ampm}
      </div>
    </div>
  );
};
