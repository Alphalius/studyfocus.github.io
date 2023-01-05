// Variables

let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 1;
let breakTime = 5;

let seconds = "00"

// Display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

// Start timer
function start() {
    // Change button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    // Change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    // Countdown
    let timerFunction = () => {
        // Change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // Start
        seconds = seconds - 1;

        if (seconds === 0) {
            workMinutes = workMinutes - 1;
            if (workMinutes === -1) {
                if (breakCount % 2 === 0) {
                    // Start Break
                    workMinutes = breakMinutes;
                    breakCount++
                    document.getElementById("breakCounter").innerHTML = breakCount;

                    // Change the Painel
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                } else {
                    // Continue Work
                    workMinutes = workTime;
                    breakCount++

                    // Change the Painel
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    // Start Countdown
    setInterval(timerFunction, 1000);
}