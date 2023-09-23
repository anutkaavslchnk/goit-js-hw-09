function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
const StartBtn=document.querySelector("[data-start]");
const StopBtn=document.querySelector("[data-stop]");
const body=document.querySelector("body");
const typeStart=()=>{
     timerStart=setInterval(()=>{
        body.style.backgroundColor=getRandomHexColor();
        StartBtn.disabled = true;
        StopBtn.disabled = false;
    }, 1000)
    
};
StartBtn.addEventListener("click", typeStart);
const typeStop=()=>{
    clearInterval(timerStart);

        StopBtn.disabled = true;
        StartBtn.disabled = false;
    
};
StopBtn.addEventListener("click", typeStop);
