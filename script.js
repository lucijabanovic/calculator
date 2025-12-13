function add(a, b) {
    let result = a + b;
    let str = result.toString();
    if (str.includes(".") && str.slice(str.indexOf(".")).length > 4) {
        return parseFloat(result.toFixed(4));
    } else {
        return parseFloat(result);
    }
}

function subtract(a, b) {
    let result = a - b;
    let str = result.toString();
    if (str.includes(".") && str.slice(str.indexOf(".")).length > 4) {
        return parseFloat(result.toFixed(4));
    } else {
        return parseFloat(result);
    }
}

function multiply(a, b) {
    let result = a * b;
    let str = result.toString();
    if (str.includes(".") && str.slice(str.indexOf(".")).length > 4) {
        return parseFloat(result.toFixed(4));
    } else {
        return parseFloat(result);
    }
}

function divide(a, b) {
    let result = a / b;
    let str = result.toString();
    if (str.includes(".") && str.slice(str.indexOf(".")).length > 4) {
        return parseFloat(result.toFixed(4));
    } else {
        return parseFloat(result);
    }
}

function mod(a, b) {
    let result = a % b;
    let str = result.toString();
    if (str.includes(".") && str.slice(str.indexOf(".")).length > 4) {
        return parseFloat(result.toFixed(4));
    } else {
        return parseFloat(result);
    }
}

function operate(op, n1, n2) {
    switch(op) {
        case "＋":
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "×":
            return multiply(n1, n2);
        case "÷":
            return divide(n1, n2);
        case "%":
            return mod(n1, n2);
    }
}

let num1 = null;
let num2 = null;
let operator = null;

let upperInput = document.querySelector("#upper-input");
let input = document.querySelector("#input");
let digits = document.querySelectorAll(".digit");
let buttons = document.querySelectorAll(".button");

let num = null;
let subDigit = null;
let solved = false;
let dotClicked = false;
let res = null;
let pmClicked = false;

function evaluate() {
    let opIndex = null;
    switch(operator) {
        case "＋":
            opIndex = input.textContent.indexOf("＋");
            num1 = parseFloat(input.textContent.slice(0, opIndex));
            num2 = parseFloat(input.textContent.slice(opIndex + 1));
            if (isNaN(num1)) {
                num1 = input.textContent.slice(0, opIndex);
                num1 = parseFloat(num1.slice(1, num1.length - 1));
            }
            if (isNaN(num2)) {
                num2 = input.textContent.slice(opIndex + 1);
                num2 = parseFloat(num2.slice(1, num2.length - 1));
            }
            break;
        case "-":
            opIndex = input.textContent.indexOf("-");
            if (opIndex == 0) {
                let modified = input.textContent.slice(1);
                opIndex = modified.indexOf("-") + 1;            
            } else if (opIndex == 1 && input.textContent.at(0) == "(") {
                let modified = input.textContent.slice(2);
                opIndex = modified.indexOf("-") + 2;
            }
            num1 = parseFloat(input.textContent.slice(0, opIndex));
            num2 = parseFloat(input.textContent.slice(opIndex + 1));
            if (isNaN(num1)) {
                num1 = input.textContent.slice(0, opIndex);
                num1 = parseFloat(num1.slice(1, num1.length - 1));
            }
            if (isNaN(num2)) {
                num2 = input.textContent.slice(opIndex + 1);
                num2 = parseFloat(num2.slice(1, num2.length - 1));
            }
            break;
        case "×":
            opIndex = input.textContent.indexOf("×");
            num1 = parseFloat(input.textContent.slice(0, opIndex));
            num2 = parseFloat(input.textContent.slice(opIndex + 1));
            if (isNaN(num1)) {
                num1 = input.textContent.slice(0, opIndex);
                num1 = parseFloat(num1.slice(1, num1.length - 1));
            }
            if (isNaN(num2)) {
                num2 = input.textContent.slice(opIndex + 1);
                num2 = parseFloat(num2.slice(1, num2.length - 1));
            }
            break;
        case "÷":
            opIndex = input.textContent.indexOf("÷");
            num1 = parseFloat(input.textContent.slice(0, opIndex));
            num2 = parseFloat(input.textContent.slice(opIndex + 1));
            if (isNaN(num1)) {
                num1 = input.textContent.slice(0, opIndex);
                num1 = parseFloat(num1.slice(1, num1.length - 1));
            }
            if (isNaN(num2)) {
                num2 = input.textContent.slice(opIndex + 1);
                num2 = parseFloat(num2.slice(1, num2.length - 1));
            }
            break;
        case "%":
            opIndex = input.textContent.indexOf("%");
            num1 = parseFloat(input.textContent.slice(0, opIndex));
            num2 = parseFloat(input.textContent.slice(opIndex + 1));
            if (isNaN(num1)) {
                num1 = input.textContent.slice(0, opIndex);
                num1 = parseFloat(num1.slice(1, num1.length - 1));
            }
            if (isNaN(num2)) {
                num2 = input.textContent.slice(opIndex + 1);
                num2 = parseFloat(num2.slice(1, num2.length - 1));
            }
            break;
        
    }
}

buttons.forEach(function(btn) {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("digit")) {
            if (solved) {
                upperInput.textContent = null;
                input.textContent = 0;
                num1 = null;
                num2 = null;
                operator = null;
                solved = false;
            }
            if (input.textContent == "0") {
                input.textContent = null;
            }

            input.textContent += btn.firstElementChild.textContent;
            pmClicked = false;
        }

        if (btn.getAttribute("id") == "delBtn") {
            solved = false;
            if ("＋-×÷%".includes(input.textContent.at(input.textContent.length - 1))) {
                operator = null;
            }
            if (input.textContent.at(input.textContent.length - 1) == ".") {
                dotClicked = false;
            }
            input.textContent = input.textContent.slice(0, input.textContent.length - 1);
            upperInput.textContent = null;
            if (input.textContent.length == 0) {
                input.textContent = 0;
            }
            pmClicked = false;
        }

        if (btn.getAttribute("id") == "ac") {
            dotClicked = false;
            input.textContent = 0;
            upperInput.textContent = null;
            num1 = null;
            num2 = null;
            operator = null;
            pmClicked = false;
        }

        if (btn.classList.contains("operator") || btn.getAttribute("id") == "mod") { 
            if (!(btn.getAttribute("id") == "equal")) {
                dotClicked = false;
                solved = false;
                upperInput.textContent = null;

                if (!operator) {
                    if (input.textContent != "0" && !("＋-×÷%".includes(input.textContent))) {
                        operator = btn.firstElementChild.textContent;
                        input.textContent += operator;
                    } else if (input.textContent == "0" && btn.firstElementChild.textContent == "-") {
                        input.textContent = btn.firstElementChild.textContent;
                    }
                } else {
                    evaluate();
                    if (!num2) {
                        input.textContent = input.textContent.slice(0, input.textContent.length-1);
                        input.textContent += btn.firstElementChild.textContent;;
                        operator = btn.firstElementChild.textContent;
                    } else if (num1 && num2) {
                        upperInput.textContent = `${num1} ${operator} ${num2}`;
                        input.textContent = `${operate(operator, num1, num2)}${btn.firstElementChild.textContent}`;
                        operator = btn.firstElementChild.textContent;
                    }
                }
            }
            pmClicked = false;
        }

        if (btn.getAttribute("id") == ("dot")) {
            if (solved) {
                upperInput.textContent = null;
                solved = false;
                if (input.textContent.includes(".")) {
                    dotClicked = true;
                }
            }
            if (!dotClicked && "0123456789".includes(input.textContent.at(input.textContent.length - 1))) {
                input.textContent += ".";
                dotClicked = true;
            }
            pmClicked = false;
        }

        if (btn.getAttribute("id") == ("pm")) {
            pmClicked = !pmClicked;
            console.log(pmClicked);
            res = parseFloat(input.textContent);
            console.log(res);
            evaluate();

            if (pmClicked) {
                if (num1 === null) {
                    if (res > 0) {
                        input.textContent = `(-${input.textContent})`;
                    } else if (res < 0) {
                        if (input.textContent.at(0) == "-") {
                            input.textContent = input.textContent.slice(1);
                        } else {
                            input.textContent = `-(${input.textContent})`;
                        }
                    } else {
                        input.textContent = input.textContent.slice(2, input.textContent.length - 1);
                    }
                } else if (num1 !== null && num2 !== null) {
                    if (input.textContent.at(0) == "(") {
                        input.textContent = input.textContent.replace(`(${num1})${operator}${num2}`, `(${num1})${operator}(-${num2})`);
                    } else {
                        input.textContent = input.textContent.replace(`${num1}${operator}${num2}`, `${num1}${operator}(-${num2})`);
                    }
                }
            } else {
                if (num1 === null) {
                    if (input.textContent.at(0) == "-") {
                        input.textContent = input.textContent.slice(2, input.textContent.length - 1);
                    } else if (input.textContent.at(0) == "(") {
                        input.textContent = input.textContent.slice(2, input.textContent.length - 1);
                    } else {
                        input.textContent = `(-${input.textContent})`;
                    }
                } else if (num1 !== null && num2 !== null) {
                    if (input.textContent.at(0) == "(") {
                        input.textContent = input.textContent.replace(`(${num1})${operator}(${num2})`, `(${num1})${operator}${parseFloat(num2.toString().slice(1))}`);
                    } else {
                        input.textContent = input.textContent.replace(`${num1}${operator}(${num2})`, `${num1}${operator}${parseFloat(num2.toString().slice(1))}`);
                    }
                }
            }
        }

        if (btn.getAttribute("id") == "equal") {
            if (!solved) {
                dotClicked = false;
                evaluate();

                if (!isNaN(num1) && operator !== null && !isNaN(num2)) {
                    upperInput.textContent = input.textContent;
                    input.textContent = operate(operator, num1, num2);
                } else if (!isNaN(num1) && operator == "%" && isNaN(num2)) {
                    upperInput.textContent = input.textContent;
                    input.textContent = num1 / 100;
                }
                solved = true;
                num1 = null;
                num2 = null;
                operator = null;
            }
            pmClicked = false;
        }

        input.scrollLeft = input.scrollWidth;
        upperInput.scrollLeft = upperInput.scrollWidth;
    });
});


