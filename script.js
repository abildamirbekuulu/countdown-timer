const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = '5 Dec 2023';

function countdown() {
  const currentDate = new Date();
  const newYearsDate = new Date(newYears);

  let seconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(seconds/3600/24);
  const hours = Math.floor((seconds - (days * 3600 * 24))/3600);
  const minutes = Math.floor((seconds - (days * 3600 * 24)- hours * 3600)/60);
  seconds = parseInt(seconds - (days * 3600 * 24)- hours * 3600 - minutes * 60);

  console.log(days, hours, minutes)

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time;
}


//initial call

countdown();

setInterval(countdown, 1000);
