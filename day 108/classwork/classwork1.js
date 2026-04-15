//შექმენით ფუნქცია, რომელსაც არგუმენტად გადაეცემა ტექსტი სადაც იქნება როგორც ასოები, ასევე რიცხვები და სხვა დანარჩენი სიმბოლო. ობიექტის სახით დააბრუნეთ ასოები, რიცხვები და სხვა სიმბოლოები რამდენჯერ მეორდება.

let help = function(text){
    let count = {
        letters: 0,
        numbers: 0,
        symbols: 0
    }
      
    text = text.toLowerCase()
    text = text.split('')
    text = text.join(' ')

    for(let v of text){
        "abcdefghijklmnopqrstuvwxyz".includes(v) ? count.letters++ : "0123456789".includes(v) ? count.numbers++ : count.symbols++
    }
    return count
}