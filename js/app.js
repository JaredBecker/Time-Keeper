// Stopwatch variables
let hour = 0;
let min = 0;
let sec = 0;
let mil = 0;
let stopwatch = document.querySelector('.stopwatch');

// Onscreen date variables
let yearField = document.querySelector('.year');
let timeField = document.querySelector('.time');

// General variables
let stopwatchInterval;
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


const setTime = (year, month, day, hour, min) => {
    if (yearField !== null || yearField !== undefined) {
        yearField.innerHTML = `${day} ${month} ${year}`
    }

    if (timeField !== null || timeField !== undefined) {
        timeField.innerHTML = `${hour} : ${min}`
    }
}

const startStopwatch = () => {
    stopwatchInterval = setInterval(() => {
        if (mil < 975) {
            mil += 25;
        } else {
            if (sec < 59) {
                sec += 1;
            } else {
                sec = 0;
                if (min < 59) {
                    min += 1;
                } else {
                    min = 0;
                    hour += 1;
                }
            }
            mil = 0;
        }

        stopwatch.innerHTML = `
            <span class="hours">${parseInt(hour) <= 9 ? '0' + hour : hour}</span> :
            <span class="minutes">${parseInt(min) <= 9 ? '0' + min : min}</span> :
            <span class="seconds">${parseInt(sec) <= 9 ? '0' + sec : sec}</span> :
            <span class="milliseconds">${parseInt(mil) <= 9 ? '0' + hour : mil}</span>
        `;

    }, 25)
}

const pauseStopwatch = () => {
    clearInterval(stopwatchInterval);
}

const completeLog = () => {
    let logs = [];
    let newLog = {
        id: findNextId(),
        title: document.getElementById('log_title').value,
        hour: hour,
        min: min,
        sec: sec
    }

    if (localStorage.getItem('logs') !== null) {
        logs = JSON.parse(localStorage.getItem('logs'));
    }

    logs.push(newLog);
    localStorage.setItem('logs', JSON.stringify(logs));

    alert('Log saved successfully!');

    hour = 0;
    min = 0;
    sec = 0;
    mil = 0;

    stopwatch.innerHTML = 'Let\'s Begin!';
}

const findNextId = () => {
    if (localStorage.getItem('logs') !== null) {
        let id = 0;
        let logs = JSON.parse(localStorage.getItem('logs'));

        logs.forEach(el => {
            if (id > parseInt(el.id)) {
                // do nothing
            } else {
                id = el.id
            }
        });

        return id + 1
    } else {
        return 1;
    }
}


// Set date and time
const dateManager = setInterval(() => {
    let date = new Date();
    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = days[date.getDay()];
    let hour = date.getHours();
    let min = date.getMinutes();

    hour = hour <= 9 ? `0${hour}` : hour;
    min = min <= 9 ? `0${min}` : min;

    setTime(year, month, day, hour, min);

}, 100)