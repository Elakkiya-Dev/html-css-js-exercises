let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
  debugger
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function start() {
  debugger
  if (timer !== null) return;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function stop() {
  debugger
  clearInterval(timer);
  timer = null;
}

function reset() {
  debugger
  stop();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
}
