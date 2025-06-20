#მომხმარებელს შემოატანინეთ სიტყვა. ამ სიტყვაშუ სადაც იქნება “g” ასო იმ ადგილებში გასპლიტეთ და დიდი “G”-თი გაერთიანეთ
def replace_g_with_G(word):
    return 'G'.join(word.split('g'))
print(replace_g_with_G(input("sheikvanet sityva: ")))
