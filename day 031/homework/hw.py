def add(x, y):
    print (x + y)

def subtract(x, y):
    print (x - y)

def multiply(x, y):
    print (x * y)

def divide(x, y):
    if y != 0:
        print (x / y)
    else:
        print("Error: Cannot divide by zero")


operation = input("Enter operation (+, -, *, /): ")
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

if operation == "+":
    result = add(num1, num2)
elif operation == "-":
    result = subtract(num1, num2)
elif operation == "*":
    result = multiply(num1, num2)
elif operation == "/":
    result = divide(num1, num2)
else:
 result = "Invalid operation"
    
    










