const DAY = 86400000;
const HOUR = 3600000;
const MINUTE = 60000;
const SECOND = 1000;

const elemDate = document.getElementById('date');

const deadlineDate = dayjs('2022-04-15T03:50:00.000Z');


setInterval(() => {
  const now = +dayjs();

  let diff = deadlineDate.diff(now);

  const _days = Math.floor(diff / DAY);
  diff -= DAY * _days;

  const _hours = Math.floor(diff / HOUR);
  diff -= HOUR * _hours;

  const _minutes = Math.floor(diff / MINUTE);
  diff -= MINUTE * _minutes;

  const _seconds = Math.floor(diff / SECOND);

  // console.log(`${_day} days ${_hour} hours ${_minute} minutes ${_seconds} seconds`)
  document.getElementById("days").innerText = _days,
  document.getElementById("hours").innerText = _hours,
  document.getElementById("minutes").innerText = _minute,
  document.getElementById("seconds").innerText = _seconds;
}, 1000);