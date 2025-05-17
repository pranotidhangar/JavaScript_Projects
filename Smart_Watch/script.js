const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const batteryEl = document.getElementById('battery');
const heartRateEl = document.getElementById('heartRate');
const stepCountEl = document.getElementById('stepCount');

let steps = 0;

function updateTimeAndDate() {
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  dateEl.textContent = now.toDateString();
}

function simulateHeartRate() {
  const bpm = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
  heartRateEl.textContent = `${bpm} bpm`;
}

function simulateStep() {
  steps += Math.floor(Math.random() * 5) + 1;
  stepCountEl.textContent = `${steps} steps`;
}

function simulateBattery() {
  let battery = 100;
  setInterval(() => {
    if (battery > 0) {
      battery--;
      batteryEl.textContent = `🔋 ${battery}%`;
    }
  }, 30000); // simulate battery drop every 30s
}

// Initial setup
updateTimeAndDate();
simulateBattery();
setInterval(updateTimeAndDate, 60000); // update every minute

