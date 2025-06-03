function emptyIds(){
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("operation").value = '';
}
function calculate() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  let result = "";

  if (isNaN(n1) || isNaN(n2)) {
    result = "Please enter both numbers.";
  } else {
    switch (operation) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        break;
      case '%':
        result = n1 % n2;
        break;
      default:
        result = "Please select an operation.";
    }
  }

  document.getElementById("result").textContent = "Result: " + result;
  emptyIds();
}