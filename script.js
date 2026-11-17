let display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
  display.textContent = currentInput;
}

function appendToDisplay(value) {
  if (currentInput === 'Error') currentInput = '0';
  if (currentInput === '0' && value !== '.') currentInput = value;
  else currentInput += value;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : '0';
  updateDisplay();
}

function calculate() {
  try {
    const result = Function('"use strict"; return (' + currentInput + ')')();
    if (!Number.isFinite(result)) throw new Error('Invalid result');
    currentInput = String(Number(result.toPrecision(12)));
  } catch (error) {
    currentInput = 'Error';
  }
  updateDisplay();
}
