let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timer-display");
let lapContainer = document.querySelector(".laps");
let interval = null;
let isRunning = false;

document.getElementById("start-pause-timer").addEventListener("click", () => {
  if (!isRunning) {
    interval = setInterval(displayTimer, 10);
    document.getElementById("start-pause-timer").innerText = "Pause";
  } else {
    clearInterval(interval);
    document.getElementById("start-pause-timer").innerText = "Start";
  }
  isRunning = !isRunning;
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(interval);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000";
  document.getElementById("start-pause-timer").innerText = "Start";
  isRunning = false;
});

document.getElementById("lap-timer").addEventListener("click", () => {
  if (isRunning) {
    const lapTime = timerRef.innerHTML;
    const lapItem = document.createElement("div");
    lapItem.innerText = `Lap: ${lapTime}`;
    lapContainer.appendChild(lapItem);
  }
});

document.getElementById("clear-laps").addEventListener("click", () => {
  lapContainer.innerHTML = "";
});

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  let ms = String(milliseconds).padStart(3, "0");

  timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
