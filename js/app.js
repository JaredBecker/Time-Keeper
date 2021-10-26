// Onscreen date variables
let yearField = document.querySelector('.year');
let timeField = document.querySelector('.time');

// General variables
let stopwatchInterval;
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


const setTime = (year, month, date, day, hour, min) => {
    if (yearField !== null || yearField !== undefined) {
        yearField.innerHTML = `${day} ${date} ${month} ${year}`
    }

    if (timeField !== null || timeField !== undefined) {
        timeField.innerHTML = `${hour} : ${min}`
    }
}

// Set date and time
const dateManager = setInterval(() => {
    let date = new Date();
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let dayNum = date.getDate();
    let dayTitle = days[date.getDay()];
    let hour = date.getHours();
    let min = date.getMinutes();

    hour = hour <= 9 ? `0${hour}` : hour;
    min = min <= 9 ? `0${min}` : min;

    setTime(year, month, dayNum, dayTitle, hour, min);

}, 100)