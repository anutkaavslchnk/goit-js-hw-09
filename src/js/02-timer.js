import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate=selectedDates[0];
        const currDate= new Date();
        
      
          if(selectedDate<=currDate){
       
            Notiflix.Notify.failure("Please choose a date in the future")
            }else{
                btn.disabled = false;
                startTime(selectedDate, currDate);
          
      }
    },
  };
  

const input=document.getElementById("datetime-picker");
  const btn=document.querySelector('[data-start]');
  btn.disabled = true;
  const inputValue=(event)=>{
    btn.disabled = true;
}


function startTime(date, currDate){
    const countInterval=setInterval(update,1000);
function update(){
    const parOfConvert=date-currDate;
    if(parOfConvert<=0){
        clearInterval(countInterval);
    }else{
        const { days, hours, minutes, seconds } =convertMs(parOfConvert);
        const day=document.querySelector("[data-days]");
        const hour=document.querySelector("[data-minutes]");
        const minute=document.querySelector("[data-minutes]");
        const sec=document.querySelector("[data-seconds]");
        day.textContent=days;
        hour.textContent=hours;
        sec.textContent=seconds;
        minute.textContent=minutes;
    }
}
}

    function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
  }


  input.addEventListener("input",inputValue);
  flatpickr(input, options);