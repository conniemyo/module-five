let counter = 0;
const counterValueElement = document.getElementById("counterValue");

function updateCounterDisplay() {
    counterValueElement.textContent = counter;
    // change css based on variable value
    if (counter < 0) {
        counterValueElement.style.backgroundColor = "red";
    } else if (counter === 0) {
        counterValueElement.style.backgroundColor = "white";
    } else { // change css with js
        counterValueElement.style.backgroundColor = "green";
    }
}

function incrementCounter() {
    // for loop
    for (let i = 0; i < 1; i++) {
        counter++;
    }
    // while loop
    while (counter < 10) {
        updateCounterDisplay();
        break;
    }
    updateCounterDisplay();
}

function decrementCounter() {
    for (let i = 0; i < 1; i++) {
        counter--;
    }
    while (counter > -10) {
        updateCounterDisplay();
        break;
    }
    updateCounterDisplay();
}

updateCounterDisplay();
