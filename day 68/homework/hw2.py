# შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა სია. ეს სია უნდა იყოს სტრინგებით სავსე. თქვენი მიზანია რომ ეს სია გაერთიანოთ და მათ შიგნით იყოს * სიმბოლო გაერთიანების დროს.
def join_strings_with_asterisk(string_list):
    return '*'.join(string_list)
print(join_strings_with_asterisk(string_list = input("input: ")))