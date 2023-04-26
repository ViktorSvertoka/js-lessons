'use strict';

function add() {
  const numberOne = Math.trunc(document.querySelector('.number1').value);
  const numberTwo = Math.trunc(document.querySelector('.number2').value);
  const totalSum = numberOne + numberTwo;
  document.querySelector('.result').value = totalSum;
}

function subtraction() {
  const numberOne = Math.trunc(document.querySelector('.number1').value);
  const numberTwo = Math.trunc(document.querySelector('.number2').value);
  const totalSum = numberOne - numberTwo;
  document.querySelector('.result').value = totalSum;
}

function multiply() {
  const numberOne = Math.trunc(document.querySelector('.number1').value);
  const numberTwo = Math.trunc(document.querySelector('.number2').value);
  const totalSum = numberOne * numberTwo;
  document.querySelector('.result').value = totalSum;
}

function divide() {
  const numberOne = Math.trunc(document.querySelector('.number1').value);
  const numberTwo = Math.trunc(document.querySelector('.number2').value);
  const totalSum = numberOne / numberTwo;
  document.querySelector('.result').value = totalSum;
}

document.querySelector('.btn-add').addEventListener('click', add);
document
  .querySelector('.btn-subtraction')
  .addEventListener('click', subtraction);
document.querySelector('.btn-multiply').addEventListener('click', multiply);
document.querySelector('.btn-divide').addEventListener('click', divide);
