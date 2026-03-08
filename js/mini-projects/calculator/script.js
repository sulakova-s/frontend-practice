// Calculator states
let currentDisplay = "0";
let firstOperand = null;
let operator = null;
let waitingForSecond = false;

// Calculator elements
const display = document.getElementById("calc-display");
const buttons = document.querySelectorAll(".buttons button");

function updateDisplay() {
  display.textContent = currentDisplay;
}

function handleDigit(digit) {
  if (waitingForSecond) {
    currentDisplay = digit;
    waitingForSecond = false;
  } else {
    if (currentDisplay === "0") {
      currentDisplay = digit;
    } else {
      currentDisplay += digit;
    }
  }
  updateDisplay();
}

function handleOperator(nextOperator) {
  if (operator === nextOperator) {
    return;
  }

  const inputValue = parseFloat(currentDisplay);

  if (firstOperand === null) {
    firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);
    currentDisplay = result.toString();
    firstOperand = result;
  }
  waitingForSecond = true;
  operator = nextOperator;
  updateDisplay();
}

function calculate(a, b, operator) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "×") return a * b;
  if (operator === "÷") {
    if (b === 0) return "Error";
    return a / b;
  }
}

function handleEquals() {
  if (firstOperand !== null && operator !== null) {
    const inputValue = parseFloat(currentDisplay);
    const result = calculate(firstOperand, inputValue, operator);
    currentDisplay = result.toString();

    firstOperand = null;
    operator = null;
    waitingForSecond = true;
    updateDisplay();
  }
}

function handleClear() {
  currentDisplay = "0";
  firstOperand = null;
  operator = null;
  waitingForSecond = false;

  updateDisplay();
}

function handleToggleSign() {
  if (currentDisplay === "Error" || currentDisplay === "0") return;

  if (currentDisplay.startsWith("-")) {
    currentDisplay = currentDisplay.slice(1);
  } else {
    currentDisplay = "-" + currentDisplay;
  }

  updateDisplay();
}

function handleDecimal() {
  if (waitingForSecond) {
    currentDisplay = "0.";
    waitingForSecond = false;
  } else if (!currentDisplay.includes(".")) {
    currentDisplay += ".";
  }
  updateDisplay();
}

function handlePercent() {
  const currentValue = parseFloat(currentDisplay);
  if (firstOperand !== null && operator !== null && !waitingForSecond) {
    const percentValue = firstOperand * (currentValue / 100);
    currentDisplay = percentValue.toString();
  } else {
    currentDisplay = (currentValue / 100).toString();
  }
  updateDisplay();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    const ariaLabel = button.getAttribute("aria-label");

    if (ariaLabel === "Toggle positive/negative") {
      handleToggleSign();
    } else if (value === "AC") {
      handleClear();
    } else if (!isNaN(value)) {
      handleDigit(value);
    } else if (
      value === "+" ||
      value === "-" ||
      value === "×" ||
      value === "÷"
    ) {
      handleOperator(value);
    } else if (value === "." || value === ",") {
      handleDecimal();
    } else if (value === "%") {
      handlePercent();
    } else if (value === "=") {
      handleEquals();
    }
  });
});

// Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;
  
  // Digits
  if (key >= "0" && key <= "9") {
    handleDigit(key);
  }
  
  // Operators
  else if (key === "+") {
    handleOperator("+");
  }
  else if (key === "-") {
    handleOperator("-");
  }
  else if (key === "*") {
    handleOperator("×");
  }
  else if (key === "/") {
    event.preventDefault(); 
    handleOperator("÷");
  }
  
  // Point
  else if (key === ".") {
    handleDecimal();
  }
  
  // Equals/Ent
  else if (key === "=" || key === "Enter") {
    event.preventDefault(); 
    handleEquals();
  }
  
  // Esc
  else if (key === "Escape") {
    handleClear();
  }
  
  // Percent
  else if (key === "%") {
    handlePercent();
  }
});