const display=document.getElementById('display');
const memoryStatus=document.getElementById('memory-status');
let currentInput='0';
let memoryValue=0;
function updateDisplay(){display.textContent=currentInput;}
function updateMemoryStatus(){memoryStatus.textContent='記憶：'+memoryValue;}
function appendToDisplay(value){if(currentInput==='Error')currentInput='0';if(currentInput==='0'&&value!=='.')currentInput=value;else currentInput+=value;updateDisplay();}
function clearDisplay(){currentInput='0';updateDisplay();}
function deleteLast(){currentInput=currentInput.length>1?currentInput.slice(0,-1):'0';updateDisplay();}
function evaluateInput(){if(!/^[0-9+*/.()\s-]+$/.test(currentInput))throw Error('Invalid expression');const n=Function('"use strict";return ('+currentInput+')')();if(!Number.isFinite(n))throw Error('Invalid result');return n;}
function calculate(){try{currentInput=String(Number(evaluateInput().toPrecision(12)));}catch(e){currentInput='Error';}updateDisplay();}
function calculatePercentage(){try{currentInput=String(Number((evaluateInput()/100).toPrecision(12)));}catch(e){currentInput='Error';}updateDisplay();}
function memoryAdd(){try{memoryValue+=evaluateInput();updateMemoryStatus();}catch(e){currentInput='Error';updateDisplay();}}
function memorySubtract(){try{memoryValue-=evaluateInput();updateMemoryStatus();}catch(e){currentInput='Error';updateDisplay();}}
function memoryRecall(){currentInput=String(memoryValue);updateDisplay();}
function memoryClear(){memoryValue=0;updateMemoryStatus();}
updateMemoryStatus();
