def calculate_tip(bill_amount):
    tip = bill_amount * 0.20
    return float(tip)

bill_input = float(input("Enter your bill amount: "))
tip_output = calculate_tip(bill_input)
print("The tip is: {tip_output}")
