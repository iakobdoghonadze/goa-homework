def capitalize_first_letters(sentence):
    words = sentence.split()
    
    capitalized_words = []
    for word in words:
        if word: 
            capitalized_word = word[0].upper() + word[1:]
            capitalized_words.append(capitalized_word)
    
    result = ' '.join(capitalized_words)
    return result
print(capitalize_first_letters("i don't know what sentence to give for this function to work so i will just  this"))
