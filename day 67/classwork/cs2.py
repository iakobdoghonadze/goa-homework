#2)შექმენი ცვლადი სადაც შეინახავ ერთ დიდ სტრინგს სადაც იქნება რამოდენიმე სიტყვა სპეიცებით გამოყოფილი,თქვენი დავალებაა გასპლიტოთ ეს სტრინგი შესაბამის სიმბოლოზე რომ მიიღთ სია სადაც გექნებათ თითოეული სიტყვა შენახული 
my_string = "gamarjoba samyaro es aris pythoni"
def split_string(string):
    return string.split(' ')
result = split_string(my_string)
print(result)