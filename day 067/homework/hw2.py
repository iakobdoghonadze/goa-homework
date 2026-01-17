#2)შექმენი სია სადაც მოთავსებული გექნება სტრინგები,შენი დავალებაა ეს სია აქციო ერთ მთლიან წინადადებად(სტრინგად) და თითოეული სიტყვა დაშორებული იყოს ერთმანეთისგან სფეისით
my_list = ["gamarjoba", "samyaro", "es", "aris", "testi",] 
def join_strings(string_list):
    return ' '.join(string_list)
result = join_strings(my_list)
print(result)