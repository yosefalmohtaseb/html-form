// function showTimer() {
//     const timerDiv = document.getElementById('timer');
//     const stopwatchDiv = document.getElementById('stopwatch');
    
//     timerDiv.style.display = 'block';
//     stopwatchDiv.style.display = 'none';
//   }
  
//   function showStopwatch() {
//     const timerDiv = document.getElementById('timer');
//     const stopwatchDiv = document.getElementById('stopwatch');
    
//     timerDiv.style.display = 'none';
//     stopwatchDiv.style.display = 'block';
//   }
//   // Get the necessary elements
// const startTimerBtn = document.getElementById("start-timer-btn");
// const stopTimerBtn = document.getElementById("stop-timer-btn");
// const resetTimerBtn = document.getElementById("reset-timer-btn");
// const timerDisplay = document.getElementById("timer-display");

// let timerInterval;
// let timerValue = 0;

// function startTimer() {
//   timerInterval = setInterval(() => {
//     timerValue++;
//     displayTimer();
//   }, 1000);

//   // Disable start button and enable stop button
//   startTimerBtn.disabled = true;
//   stopTimerBtn.disabled = false;
// }

// function stopTimer() {
//   clearInterval(timerInterval);

//   // Enable start button and disable stop button
//   startTimerBtn.disabled = false;
//   stopTimerBtn.disabled = true;
// }

// function resetTimer() {
//   clearInterval(timerInterval);
//   timerValue = 0;
//   displayTimer();

//   // Enable start button and disable stop button
//   startTimerBtn.disabled = false;
//   stopTimerBtn.disabled = true;
// }

// function displayTimer() {
//   const hours = Math.floor(timerValue / 3600);
//   const minutes = Math.floor((timerValue % 3600) / 60);
//   const seconds = timerValue % 60;

//   const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
//   timerDisplay.textContent = formattedTime;
// }

// function padZero(value) {
//   return value.toString().padStart(2, "0");
// }

// // Attach event listeners
// startTimerBtn.addEventListener("click", startTimer);
// stopTimerBtn.addEventListener("click", stopTimer);
// resetTimerBtn.addEventListener("click", resetTimer);


