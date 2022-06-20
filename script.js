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

console.log(operate('*', 5, 9));
console.log(operate('/', 10, 2));
console.log(operate('-', 7, 4));
console.log(operate('+', 15, 6));
