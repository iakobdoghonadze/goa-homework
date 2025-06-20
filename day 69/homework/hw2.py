def swap_case(word):
    swapped = []
    for char in word:
        if char.islower():
            swapped.append(char.upper())
        else:
            swapped.append(char.lower())
    return ''.join(swapped)
print(swap_case(input("sheikvanet sityva: ")))


