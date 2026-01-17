max_bid = int(input("Enter the maximum bid: "))

current_highest_bid = 0

while current_highest_bid < max_bid:
    new_bid = int(input("Enter next bid: "))
    
    if new_bid > current_highest_bid:
        current_highest_bid = new_bid

print("Sold: {current_highest_bid}")
