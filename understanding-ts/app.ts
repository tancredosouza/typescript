let firstValue = document.getElementById("first_value") as HTMLInputElement;
let secondValue = document.getElementById("second_value") as HTMLInputElement;
let button = document.getElementById("button") as HTMLButtonElement;

function addTwoNumbers(firstValue: number, secondValue: number) {
  return firstValue + secondValue;
}

function myFunction() {
  console.log(addTwoNumbers(+firstValue.value, +secondValue.value));
}