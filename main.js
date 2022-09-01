const displayPrevResult = document.querySelector('.prev-result');
const displayCurrentResult = document.querySelector('.current-result');
const equal = document.querySelector('.equal');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear');

const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
let current = '';
let previous = '';
let opString = '';


numberBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        getNum(e.target.textContent);
    })
})

operatorBtn.forEach((button) => {
    button.addEventListener('click', (e) => {
        getOp(e.target.textContent);
    })
})


clear.addEventListener('click', clearCalc);


// Operate when clicking equal
equal.addEventListener('click', () => {
    current = parseFloat(current);
    previous = parseFloat(previous);

    if (opString === '+') {
        current = add(previous, current);
    } else if (opString === '-') {
        current = subtract(previous, current);
    } else if (opString === 'x') {
        current = multiply(previous, current);
    } else if (opString === '÷') {
        if (current === 0) {
            clearCalc();
            displayCurrentResult.textContent = 'ERROR';
            return;
        }
        current = divide(previous, current);
    }

    displayCurrentResult.textContent = current;
})

function clearCalc() {
    current = '';
    previous = '';
    displayCurrentResult.textContent = '0';
    displayPrevResult.textContent = '';
}


// Store current number, get operator and display it
function getOp(opStr) {
    opString = opStr;
    previous = current;
    displayPrevResult.textContent = previous;
    current = '';
}


// Get the number and display it
function getNum(num) {
    current += num;
    displayCurrentResult.textContent = current;
}



// Operating functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b) {
    return divide(b, a);
}

console.log(operate(22, 4));