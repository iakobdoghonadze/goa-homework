//შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად ტექსტი, სადაც იქნება რიცხვები, ასოები და სხვა სიმბოლოები. თქვენი მიზანია დაითვალოთ თითოეული მათგანი რამდენჯერ გვხვდება და შემდეგ გადაამრავლოთ ერთმანეთზე. (თუ რომელიმე ერთ-ერთის მნიშვნელობა 0 იქნება მაშინ ამ რიცხვზე არ გადაამრავლოთ)

let countthing = function(text){
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
    let result = 1
    for(let key in count){
        if(count[key] !== 0){
            result *= count[key]
        }
    }
    return result
}

console.log(help("wesdf5e6wtg@@@"))
