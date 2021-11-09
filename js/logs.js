const logTable = document.getElementById('log_table');

const getLogs = () => {
    if (localStorage.getItem('logs') !== null) {
        let logRows = [];
        let logs = localStorage.getItem('logs');
        logs = JSON.parse(logs);

        logs.forEach(log => {
            logRows.push(createLogRow(log))
        });

        logTable.innerHTML = logRows.join('');
    }
}

const createLogRow = (log) => {
    const time = formatLogTime(log.hour, log.min, log.sec);

    return `
        <tr>
            <th scope="row">${log.id}</th>
            <td>${log.title}</td>
            <td>${log.startTime}</td>
            <td>${log.endTime}</td>
            <td>${time}</td>
            <td>${log.date}</td>
            <td>
                <button type="button" class="btn btn-danger" onclick="deleteLog(${log.id})">Delete</button>
            </td>
        </tr>
    `;
}

const formatLogTime = (hour, min, sec) => {
    let time = '';

    if (parseInt(hour) > 0) time += `${hour}hr `;
    if (parseInt(min) > 0) time += `${min}min `;
    if (parseInt(sec) > 0) time += `${sec}sec`;

    return time;
}

const deleteLog = (id) => {
    if (localStorage.getItem('logs') !== null) {
        let logs = localStorage.getItem('logs');
        logs = JSON.parse(logs);

        logs = logs.filter(log => log.id !== id);

        localStorage.setItem('logs', JSON.stringify(logs));
        getLogs();
    }
}

getLogs();