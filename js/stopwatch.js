// Stopwatch variables
let hour = 0;
let min = 0;
let sec = 0;
let mil = 0;
let stopwatch = document.querySelector('.stopwatch');

const startStopwatch = () => {
    checkIfStarted();

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

const checkIfStarted = () => {
    hasStarted = localStorage.getItem('start_time');

    if (hasStarted === null) {
        // We need to create a timestamp to save when the process was started
        let time = getTime();
        localStorage.setItem('start_time', time);
    }
}

const getTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    return `${hour}:${min}:${sec}`;
}

const completeLog = () => {
    let logs = [];
    let newLog = {
        id: findNextId(),
        title: document.getElementById('log_title').value,
        hour: hour,
        min: min,
        sec: sec,
        startTime: localStorage.getItem('start_time'),
        endTime: getTime(),
        date: new Date().toLocaleDateString("en-US")
    }

    if (localStorage.getItem('logs') !== null) {
        logs = JSON.parse(localStorage.getItem('logs'));
    }

    logs.push(newLog);
    localStorage.setItem('logs', JSON.stringify(logs));
    localStorage.removeItem('start_time');

    showMessage('Log saved successfully!');

    hour = 0;
    min = 0;
    sec = 0;
    mil = 0;

    stopwatch.innerHTML = 'Let\'s Begin!';
}

const showMessage = (msg) => {
    const msgBox = document.querySelector('.message_box');
    const msgDiv = document.querySelector('.message');

    msgDiv.innerText = msg;
    msgBox.classList.add('show');

    setTimeout(() => {
        msgBox.classList.remove('show')
    }, 1500);
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