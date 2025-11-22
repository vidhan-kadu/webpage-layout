function calculator(a, b, operation) {
  switch (operation) {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return ;
  }
}

console.log(calculator(10, 5, "add"));
console.log(calculator(10, 5, "mul"));
