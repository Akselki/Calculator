const myInput = document.getElementById("result");
const myOperator = document.getElementById("operator");

const calculator = {
    firstOperand: '',
    secondOperand: '',
    operator: '',
    calculationOrder: 0
};


function onClickPeriod(ClickedPeriod) {
    //gets last character
    const lastChar = myInput.value[myInput.value.length - 1];

    //checks for . 
    const y = myInput.value.indexOf('.')

    //adds .
    if (y > 0 || lastChar == ".") {
        console.log(y)
    } else {
        myInput.value += ClickedPeriod;
    }
    if (calculator.calculationOrder > 1) {
        calculator.secondOperand += ClickedPeriod;
    } else {
        calculator.firstOperand += ClickedPeriod;
    }
}

function onClickNumber(clickedNumber) {

    if (calculator.calculationOrder == 0 || myInput.value[myInput.value.length - 1] == '.') {
        myInput.value += clickedNumber;
        calculator.firstOperand += clickedNumber;

    } else if (calculator.calculationOrder == 2) {
        myInput.value = clickedNumber;
        calculator.secondOperand += clickedNumber;
        calculator.calculationOrder = 3

    } else if (calculator.calculationOrder == 3) {
        myInput.value += clickedNumber;
        calculator.secondOperand += clickedNumber;
    }
}

function onClickOperator(evt) {
    if (calculator.firstOperand && calculator.secondOperand !== '') {
        onclickEquals()
        calculator.firstOperand = myInput.value
        myOperator.value = evt;
        calculator.operator = evt;
        calculator.calculationOrder = 2;
        console.log(calculator.calculationOrder);
    } else if (calculator.calculationOrder == 0) {
        myInput.value = '';
        myOperator.value = evt;
        calculator.operator = evt;
        calculator.calculationOrder = 2;
        console.log(calculator.calculationOrder);
    } else {
        console.log(evt);
        myOperator.value = evt;
        calculator.operator = evt;
        calculator.calculationOrder = 2;
        console.log(calculator.calculationOrder);

    }
}

function onClickCancel(clickCancel) {

    //resets calculator object
    myInput.value = "";
    myOperator.value = "";
    calculator.firstOperand = "";
    calculator.secondOperand = "";
    calculator.calculationOrder = 0;
    calculator.operator = "";

}

function onclickEquals() {

    if (calculator.calculationOrder == 0) {

    } else {
        myInput.value = eval(calculator.firstOperand + calculator.operator + calculator.secondOperand);

        myOperator.value = "";
        calculator.firstOperand = myInput.value;
        calculator.secondOperand = "";
        calculator.calculationOrder = 2;
        calculator.operator = "";

    }
}

let a = Math.random() * Math.pow(2, 2);
console.log(a);