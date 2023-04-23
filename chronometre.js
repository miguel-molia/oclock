let intervalId;
let lapIndex = 0;
let lapTimes = [];

function startStop() {
  const startStopButton = document.getElementById('start-stop');
  if (!intervalId) {
    intervalId = setInterval(updateTimer, 1000);
    startStopButton.innerText = 'Stop';
  } else {
    clearInterval(intervalId);
    intervalId = null;
    startStopButton.innerText = 'Start';
  }
}

function updateTimer() {
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  let hours = parseInt(hoursElement.innerText);
  let minutes = parseInt(minutesElement.innerText);
  let seconds = parseInt(secondsElement.innerText) + 1;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hours++;
    minutes = 0;
  }
  hoursElement.innerText = hours.toString().padStart(2, '0');
  minutesElement.innerText = minutes.toString().padStart(2, '0');
  secondsElement.innerText = seconds.toString().padStart(2, '0');
}

function addLap() {
  const lapsList = document.getElementById('laps');
  const lapTime = document.getElementById('timer-container').innerText;
  const lapListItem = document.createElement('li');
  lapIndex++;
  lapListItem.innerText = `Tour ${lapIndex}: ${lapTime}`;
  lapTimes.push(lapListItem.innerText);
  lapsList.appendChild(lapListItem);
}

function reset() {
  clearInterval(intervalId);
  intervalId = null;
  lapIndex = 0;
  lapTimes = [];
  document.getElementById('hours').innerText = '00';
  document.getElementById('minutes').innerText = '00';
  document.getElementById('seconds').innerText = '00';
  document.getElementById('laps').innerHTML = '';
  document.getElementById('start-stop').innerText = 'Start / Stop';
}