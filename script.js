// Create the addition function
function add(a, b) {
    return a + b;
}

// Create the subtraction function
function subtract(a, b) {
    return a - b;
}

// Create the multiply function
function multiply(a, b) {
    return a * b;
}

// Create the division function
function divide(a, b) {
    return a / b;
}

// Create the operate function that takes an operator and 2 nums and
//  uses the functions above
function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

// Get the HTML elements
let display = document.querySelector('.display');
let clearbtn = document.querySelector('.clear');
let backbtn = document.querySelector('.back');
let gridbtns = document.querySelectorAll('.grid');

// Keep track of a placeholder and if it is true
is_placeholder = true;
display_placeholder = '0';

gridbtns.forEach((btn) => {
    let btn_class = btn.className.split(" ")[1];
    let char = btn.textContent;
    btn.addEventListener('click', () => {
        if (is_placeholder) {
            display.textContent = "";
            is_placeholder = false;
        }
        display.textContent += char;
        console.log(display.textContent);
    });
});

clearbtn.addEventListener('click', () => {
    is_placeholder = true;
    display.textContent = "0";
});

backbtn.addEventListener('click', () => {
    // If there was only one number in there, then we have to put the placeholder back
    if (display.textContent === "0") {
        display.textContent = "0";
    } else if (display.textContent.length === 1 && display.textContent !== '0') {
        is_placeholder = true;
        display.textContent = "0";
    } else {
        let current_text = display.textContent;
        let sub_current = current_text.substring(0, current_text.length - 1);
        display.textContent = sub_current;
    }
});

console.log(operate('*', 5, 9));
console.log(operate('/', 10, 2));
console.log(operate('-', 7, 4));
console.log(operate('+', 15, 6));
