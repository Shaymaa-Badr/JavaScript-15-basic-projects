const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway"),
  deadline = document.querySelector(".deadline"),
  items = document.querySelectorAll(".deadline-format h4");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDayDate = currentDate.getDate();

let futureDate = new Date(
  currentYear,
  currentMonth,
  currentDayDate + 10,
  11,
  30,
  0
);

let weekday = futureDate.getDay();
weekday = weekdays[weekday];
console.log(weekday);
const date = futureDate.getDate();
console.log(date);

let month = futureDate.getMonth();
month = months[month];

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
// future time in ms
const futureTime = futureDate.getTime();

function getReminingTime() {
  const today = new Date().getTime();
  const now = futureTime - today;
  // 1s = 1000 ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

  // day & hour & min in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = Math.floor(now / oneDay);
  let hours = Math.floor((now % oneDay) / oneHour);
  let minutes = Math.floor((now % oneHour) / oneMinute);
  let secounds = Math.floor((now % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, secounds];

  // format function
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (now < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}
// count down
let countDown = setInterval(getReminingTime, 1000);
getReminingTime();
