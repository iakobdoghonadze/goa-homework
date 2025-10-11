let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let action = prompt("Enter the operation (+, -, *, /):");

if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
} else {
    let result;
    if (action === "+") {
        result = Number(num1) + Number(num2);
        alert(result);
    }
    if (action === "-") {
        result = Number(num1) - Number(num2);
        alert(result);
    }
    if (action === "*") {
        result = Number(num1) * Number(num2);
        alert(result);
    }
    if (action === "/") {
        result = Number(num1) / Number(num2);
        alert(result);
    }
else {
    alert("Invalid operation. Please enter one of +, -, *, /.");
}
}
