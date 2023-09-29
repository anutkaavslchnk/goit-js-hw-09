 import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

function format(num) {
  return num.toString().padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currDate = new Date();

    if (selectedDate < currDate) {
      Notiflix.Notify.failure("Please choose a date in the future");
    } else {
      btn.disabled = false;
      startTime(selectedDate, currDate);
    }
  },
};

const input = document.getElementById("datetime-picker");
const btn = document.querySelector('[data-start]');
btn.disabled = true;

function inputValue(event) {
  btn.disabled = true;
}

function startBtn(event) {
  const selectedDate = flatpickr.parseDate(input.value);
  const currDate = new Date();

  if (selectedDate < currDate) {
    Notiflix.Notify.failure("Please choose a date in the future");
  } else {
    btn.disabled = true; 
    startTime(selectedDate, currDate);
  }
}

function startTime(selectedDate, currentDate) {
  const dayDate = document.querySelector("[data-days]");
  const hourDate = document.querySelector("[data-hours]");
  const minuteDate = document.querySelector("[data-minutes]");
  const secDate = document.querySelector("[data-seconds]");

  const countInterval = setInterval(() => {
    const timeDiff = selectedDate - currentDate;

    if (timeDiff <= 0) {
      clearInterval(countInterval);
      btn.disabled = false; 
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeDiff);

    dayDate.textContent = format(days);
    hourDate.textContent = format(hours);
    minuteDate.textContent = format(minutes);
    secDate.textContent = format(seconds);

    currentDate = new Date();
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

input.addEventListener("input", inputValue);
btn.addEventListener("click", startBtn);
flatpickr(input, options);
