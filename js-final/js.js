// console.log("Test");
let resultString = "";
let phoneNum = "";
let operatorAr = ['+', '-', 'x', '/'];
let resultValue = 0;
let operator = "";
let operatorNum = "";

const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");
const displayNumber = document.getElementById("phone-number");

const displayResults = (number1, op, number2) => {
    result.innerHTML = `${number1} ${op} ${number2}`;
}

const calculation = () => {

    if (operatorNum && operator && !isNaN(parseFloat(operatorNum)) && !isNaN(parseFloat(phoneNum))){
        const num = parseFloat(operatorNum);
        const num2 = parseFloat(phoneNum);
        switch (operator) {
            case '+':
                resultValue = num + num2;
                break;

            case '-':
                resultValue = num - num2;
                break;

            case 'x':
                resultValue = num * num2;
                break;

            case '/':
                resultValue = num / num2;
                break;
        }
    }

    displayResults(operatorNum, operator, phoneNum);
    if (isNaN(resultValue)){
        phoneNum = "";
    }
    else{
        phoneNum = resultValue.toString();
    }
    result.innerHTML = resultValue;
    displayNumber.textContent = phoneNum;
    operator = "";
    operatorNum = "";
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    const value = button.dataset.value;

    if(!isNaN(parseFloat(value))){
        phoneNum += value;
    }
    if (value === "AC"){
        resultString = "";
        phoneNum = "";
        resultValue = 0;
    }

    else if(value === "RESET"){
        phoneNum = "";
    }

    else if(value === "="){
    calculation();
    phoneNum += value;
    }
    
    else if(operatorAr.includes(value)){
        operator = value;
        operatorNum = phoneNum;
        phoneNum = "";
    }

    if (value != "="){
        displayResults(operatorNum, operator, phoneNum);
    }

    });
});

