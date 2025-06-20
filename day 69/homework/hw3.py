#შექმენით ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია. თქვენი მიზანია ამ სიის თითოეული რიცხვი გაასტრინგოთ და შეაერთოთ ისე რომ მათ შორის '@' იყოს.  ( join & split გამოიყენეთ )

def join_numbers_with_at_symbol(numbers):
    string_numbers = []
    
    for num in numbers:
        string_numbers.append(str(num))
    
    result = '@'.join(string_numbers)
    
    return result

print(join_numbers_with_at_symbol(input("შეიყვანეთ რიცხვები, გამიჯნული ცალსახარი ნიშნით: ")))