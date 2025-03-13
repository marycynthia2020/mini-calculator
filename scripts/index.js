const output = document.getElementById("result");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

function add() {
  let result = 0;
  let firstNumber = document.getElementById("number1").value;
  let secondNumber = document.getElementById("number2").value;

  if (firstNumber === "" || secondNumber === "") {
    return;
  } else {
    result = +firstNumber + +secondNumber;
    output.textContent = `Result: ${result}`;
  }
}

function subtract() {
  let result = 0;
  let firstNumber = document.getElementById("number1").value;
  let secondNumber = document.getElementById("number2").value;

  if (firstNumber === "" || secondNumber === "") {
    return;
  } else {
    result = +firstNumber - +secondNumber;
    output.textContent = `Result: ${result}`;
  }
}

function multiply() {
  let result = 0;
  let firstNumber = document.getElementById("number1").value;
  let secondNumber = document.getElementById("number2").value;

  if (firstNumber === "" || secondNumber === "") {
    return;
  } else {
    result = +firstNumber * +secondNumber;
    output.textContent = `Result: ${result}`;
  }
}

function divide() {
  let result = 0;
  let firstNumber = document.getElementById("number1").value;
  let secondNumber = document.getElementById("number2").value;

  if (firstNumber === "" || secondNumber === "") {
    return;
  } else {
    result = +firstNumber / +secondNumber;
    output.textContent = `Result: ${result}`;
  }
}
