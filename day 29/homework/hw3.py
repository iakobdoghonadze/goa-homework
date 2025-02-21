def calculate_bmi(weight, height):
    bmi = weight / (height ** 2)
    if bmi < 18.5:
        return 'Underweight'
    elif 18.5 <= bmi < 25:
        return 'Normal'
    elif 25 <= bmi < 30:
        return 'Overweight'
    else:
        return 'Obese'

weight = float(input("Enter your weight in kilograms: "))
height = float(input("Enter your height in meters: "))
bmi_category = calculate_bmi(weight, height)
print(f"Your BMI category is: {bmi_category}")

