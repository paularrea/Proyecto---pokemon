//countdown desde 10s
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? 0 + seconds : seconds;
        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
        if (timer === 0){
            stopTimer(); //declaro funcion stop timer
        }
}

window.onload = function () {
    var tenSeconds = 10
        displayTime = document.querySelector('#time');
    startTimer(tenSeconds, displayTime);

}

