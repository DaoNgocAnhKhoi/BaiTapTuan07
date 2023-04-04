var index = 0;
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var tablee = document.getElementsByClassName('table');
var Interval;

buttonStart.onclick = function() {
    console.log("a");
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

buttonStop.onclick = function() {
    clearInterval(Interval);
    saveTimer();
}

buttonReset.onclick = function() {
    clearInterval(Interval);
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    resetTimer();
}

function startTimer() {
    tens++;

    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = 0 + tens;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}

function saveTimer(tensContent, secondContent) {
    const rowTime = document.createElement("tr");
    const indexStop = document.createElement("td");
    const timeStop = document.createElement("td");
    const spanSecond = document.createElement("span");
    const spanTen = document.createElement("span");
    indexStop.innerHTML = index;
    index++;
    spanSecond.innerHTML = appendSeconds.innerHTML;
    spanTen.innerHTML = appendTens.innerHTML;
    timeStop.innerHTML = spanSecond.innerHTML + ":" + spanTen.innerHTML;
    rowTime.appendChild(indexStop);
    rowTime.appendChild(timeStop);
    rowTime.style.textAlign = "center";
    rowTime.className = "saveTimer";
    tablee[0].appendChild(rowTime);
    // tablee.appendChild(rowTime);

}

function resetTimer() {
    var listTimer = document.getElementsByClassName("saveTimer");
    console.log(listTimer);

    for (let i = listTimer.length - 1; i >= 0; i--) {
        listTimer[i].remove();
    }

    index = 0;
}