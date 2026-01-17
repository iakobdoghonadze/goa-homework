#1)შექმენი ცვლადი სადაც შეინახავ ამ წინადადებას --> "hello*world*i*am*goga" , თქვენი დავალებაა ამ სტრინგიდან მიიღოთ სია სადაც გექნებათ ამ სტრინგში მოცემული თითოეული სიტყვა,გამოიყენეთ split ფუნქცია და სტრინგი გასპლიტეთ შესაბამის სიმბოლოზე

def split_sentence(sentence):
    return sentence.split('*')
result = split_sentence("hello*world*i*am*goga")
print(result)