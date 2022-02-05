const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEL = document.querySelector('.second');


const setTime = () => {
    let date_now = new Date();

    let date = date_now.getDate();
    let day = date_now.getDay();
    let month = date_now.getMonth();
    let year = date_now.getFullYear();

    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();

    let calc_hr = (hr * 30) + (min / 2);
    let calc_min = (min * 6) + (sec / 10);
    let calc_sec = sec * 6;
    
    hourEl.style.transform = `rotate(${calc_hr}deg)`;
    minuteEl.style.transform = `rotate(${calc_min}deg)`;
    secondEL.style.transform = `rotate(${calc_sec}deg)`;
}
setTime()
setInterval( setTime, 1000);