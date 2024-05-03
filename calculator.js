let operatorPressed = false;
let equalsPressed = false;
let firstStr = "";
let secondStr = "";
let operator = "";
const keyboard = document.querySelector("#calc-keyboard");
const equation = document.querySelector("#equation");
const result = document.querySelector("#result");
keyboard.addEventListener("click", function (e) {
  switch (e.target.id) {
    case "1":
      !operatorPressed ? (firstStr += "1") : (secondStr += "1");
      break;
    case "2":
      !operatorPressed ? (firstStr += "2") : (secondStr += "2");
      break;
    case "3":
      !operatorPressed ? (firstStr += "3") : (secondStr += "3");
      break;
    case "4":
      !operatorPressed ? (firstStr += "4") : (secondStr += "4");
      break;
    case "5":
      !operatorPressed ? (firstStr += "5") : (secondStr += "5");
      break;
    case "6":
      !operatorPressed ? (firstStr += "6") : (secondStr += "6");
      break;
    case "7":
      !operatorPressed ? (firstStr += "7") : (secondStr += "7");
      break;
    case "8":
      !operatorPressed ? (firstStr += "8") : (secondStr += "8");
      break;
    case "9":
      !operatorPressed ? (firstStr += "9") : (secondStr += "9");
      break;
    case "0":
      !operatorPressed ? (firstStr += "0") : (secondStr += "0");
      break;
    case "add":
      operatorPressed = true;
      operator = "+";
      break;
    case "subtract":
      operatorPressed = true;
      operator = "-";
      break;
    case "divide":
      operatorPressed = true;
      operator = "/";
      break;
    case "multiply":
      operatorPressed = true;
      operator = "*";
      break;
    case "=":
      equalsPressed = true;
      if (operatorPressed && firstStr != "" && secondStr != "") {
        operate(firstStr, secondStr, operator);
      } else {
        result.textContent = "ERROR";
      }
      break;
    case "clear":
      firstStr = "";
      secondStr = "";
      operator = "";
      operatorPressed = false;
      equalsPressed = false;
      equation.textContent = `0`;
      result.textContent = `0`;
      break;
  }

  equation.textContent = `${firstStr} ${operator} ${secondStr}`;
});

function operate(n1, n2, oper) {
  switch (oper) {
    case "+":
      result.textContent = `${n1 + n2}`;
      break;
    case "-":
      result.textContent = `${n1 - n2}`;
      break;
    case "*":
      result.textContent = `${n1 * n2}`;
      break;
    case "/":
      result.textContent = `${n1 / n2}`;
      break;
  }
}

function clear() {
  operatorPressed = false;
  equalsPressed = false;
  firstStr = "";
  secondStr = "";
  operator = "";
  equation.textContent = `${firstStr} ${operator} ${secondStr}`;
}
