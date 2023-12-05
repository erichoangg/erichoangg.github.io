let inputNum1 = document.getElementById("num1");
let inputNum2 = document.getElementById("num2");
const operator = document.querySelector("select");
const calculate = document.getElementById("calculate");
const display = document.getElementById("display");
const error = document.getElementById("error");
const reset = document.getElementById("reset")

let usedNum1 = null;
let usedNum2 = null;
let usedOperator = null;


calculate.addEventListener("click", calculateNum);
reset.addEventListener("click", resetNum)

// Function that calculates the user's input and displays it to the phone number
function calculateNum(){
    let result = 0;
    let count = 0;

    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);

    // Validating if user inputs the same number for both inputs
    if(num1 === num2){
        error.textContent = "Cannot use input same number in a single operation.";
        setTimeout(() => {
            error.textContent = "";
            }, 2000);
        return;
    }

    // Validating that numbers and operators aren't used twice in a row
    if(num1 === usedNum1 || num2 === usedNum2 || num1 === usedNum2 || num2 === usedNum1 ||operator.value === usedOperator){
        error.textContent = "Cannot use same number and/or operator twice in a row.";
        setTimeout(() => {
            error.textContent = "";
          }, 2000);          
        return;
    }
    // Switch statement to perform calculations
    switch (operator.value){
        case '+': 
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num1 / num2;
            break;           
    }

    let resultString = result.toString();

    // For loop to count digits of result
    for (let i = 0; i < resultString.length; i++){
        count++;
    }

    // Validating that the digit is a whole, non-negative number
    if (result < 0 || result % 1 != 0){
        error.textContent = "Invalid phone number digit";
        setTimeout(() => {
            error.textContent = "";
            }, 2000); 
          return;
    }

    // Validating the the user doesn't try to cheat by appending more than 1 digit at a time
    if (count !== 1){
        error.textContent = "Can only add one digit to phone number at a time.";
        setTimeout(() => {
            error.textContent = "";
            }, 2000); 
        return;
    }
  
    // Update used number variables so numbers and operators cannot be used twice in a row and add to phone number
    usedNum1 = num1;
    usedNum2 = num2;
    usedOperator = operator.value;
    display.textContent += result;
}

// Function that lets user start over and input new numbers
function resetNum(){
    display.textContent = "";
}