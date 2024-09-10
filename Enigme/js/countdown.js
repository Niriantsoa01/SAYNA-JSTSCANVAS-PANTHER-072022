const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")
const secondEl = document.getElementById("second")

const newYearTime = new Date("Sep 15, 2024, 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
const now = new Date().getTime();
const gap = newYearTime - now;

const second = 1000;
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const h = Math.floor((gap / hour) % 24);
const m = Math.floor((gap % hour) / minute);
const s = Math.floor((gap % minute) /second);

const hDisplay = h < 10 ? "0" + h : h;

const mDisplay = m < 10 ? "0" + m : m;

const sDisplay = s < 10 ? "0" + s : s;

hourEl.textContent = hDisplay;

minuteEl.textContent = mDisplay;

secondEl.textContent = sDisplay;

if (hDisplay === "00") {
    hourEl.textContent = "";
  } else {
    hourEl.textContent = hDisplay + ":";
  }

minuteEl.textContent = mDisplay + ":";

secondEl.textContent = sDisplay;

setTimeout(updateCountdown, 1000)
}