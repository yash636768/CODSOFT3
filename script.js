let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function appendCharacter(character) {
    if (display.textContent === '0' && character !== '.') {
        display.textContent = character;
    } else {
        display.textContent += character;
    }
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}
