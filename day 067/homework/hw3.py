#3)შექმენით წინადადება სადაც სიტყვები ერთმანეთისგან დაშორებული იქნება # -ით,თქვენი დავალებაა აქციოთ ეს წინადადება სიად და სიიდან ისევ სტრინგად მაგრამ სიიდან სტრინგად გადაქცევის დროს სიტყვები ერთმანეთისგან დაშორებულები იყვნენ $ -ით
sentence = "This#is#a#sample#sentence"
def convert_sentence(sentence):

    words = sentence.split('#')
    return '$'.join(words)
print(convert_sentence(sentence))