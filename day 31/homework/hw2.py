def find_max(num1, num2):
    if num1 > num2:
        print("number 1 is the highest number")
    elif num2 > num1:
        print("number 2 is the highest number")
    else:
        print("Both numbers are equal")

num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))
find_max(num1, num2)
