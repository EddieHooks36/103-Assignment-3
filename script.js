function calculator(){
    let operator = prompt('Enter operator ( either +, -, * or / ):');

    let number1 = prompt('Enter first number');
    let number2 = prompt('Enter second number');

    let result;


    if (operator == '+'){
        result = number1 + number2;
}
    else if (operator == '-'){
        result = number1 - number2;
}
    else if (operator == '*'){
        result = number1 * number2;
}
    else {
        result = number1 / number2;
        document.getElementById("+, -, *, /"). innerHTML = `<p class="alert-error">Invalid Input</p>`;
}
}
    
    

