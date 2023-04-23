let time = 25 * 60; // 25 minutes en secondes


const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const timeInput = document.getElementById('time');

function updateTimer() {
  let minutesLeft = Math.floor(time / 60);
  let secondsLeft = time % 60;
  minutes.textContent = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
  seconds.textContent = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
  if (time === 0) {
    clearInterval(timerInterval);
    alert('Le temps est écoulé !');
  } else {
    time--;
  }
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
  timeInput.disabled = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  timeInput.disabled = false;
}

function incrementTime() {
  let newTime = parseInt(timeInput.value) + 1;
  timeInput.value = newTime;
  time = newTime * 60;
  updateTimer();
}

function decrementTime() {
  let newTime = parseInt(timeInput.value) - 1;
  if (newTime < 1) {
    newTime = 1;
  }
  timeInput.value = newTime;
  time = newTime * 60;
  updateTimer();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
incrementBtn.addEventListener('click', incrementTime);
decrementBtn.addEventListener('click', decrementTime);
timeInput.addEventListener('change', () => {
  time = timeInput.value * 60;
})