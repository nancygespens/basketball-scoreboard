let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let countHome = 0
let countGuest = 0

// HOME
function home1() {
    countHome += 1
    scoreHome.textContent = countHome
}
function home2() {
    countHome += 2
    scoreHome.textContent = countHome
}
function home3() {
    countHome += 3
    scoreHome.textContent = countHome
}


// GUEST

function guest1() {
    countGuest += 1
    scoreGuest.textContent = countGuest
}
function guest2() {
    countGuest += 2
    scoreGuest.textContent = countGuest
}
function guest3() {
    countGuest += 3
    scoreGuest.textContent = countGuest
}

// START GAME (TIMER FUNCTION)

let timerInterval
let remainingTime = 60 * 12 
let mainDisplay = document.getElementById("timer-el")
let pauseButton = document.getElementById("pause-resume")
const initialMainTimerDuration = 720 
let quarter = document.getElementById("per-el")

function startMainTimer(duration, display) {
    let timer = duration, minutes, seconds
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds

        if (--timer < 0) {
            timer = duration   // Reset timer to original duration
            quarter.textContent = parseInt(quarter.textContent) + 1
            if (quarter.textContent > 4){
                quarter.textContent = '1'
            }
        }
        remainingTime = timer // Update remaining time
    }, 1000)
}

function toggleTimers() {
    if (timerInterval) {
        // If timers are running, pause them
        clearInterval(timerInterval)
        timerInterval = null
        pauseButton.textContent = "RESUME"
    } else {
        // If timers are paused, resume them
        startMainTimer(remainingTime, mainDisplay)
        pauseButton.textContent = "PAUSE"
    }
}

window.onload = function () {
    let mainDisplay = document.getElementById("timer-el")
    startMainTimer(remainingTime, mainDisplay)
}

// NEW GAME (RESET)

function reset() {
    countHome = 0
    countGuest = 0
    scoreHome.textContent = countHome
    scoreGuest.textContent = countGuest

    clearInterval(timerInterval)
    startMainTimer(initialMainTimerDuration, mainDisplay)

    quarter.textContent = '1'
}


