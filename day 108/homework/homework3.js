//შექმენით ფუნქცია, რომელსაც გადაეცემა ერთი სიმბოლო. switch / case გამოიყენეთ დაადგინეთ ეს სიმბოლო ასოა, რიცხვია თუ სხვა სიმბოლო.

function checksymbol(symbol) {

    let letter = "abcdefghijklmnopqrstuvwxyz"
    let number = "0123456789"

    switch (true) {
        case (letter.includes(symbol) || letter.toUpperCase().includes(symbol)):
            return "ეს სიმბოლო ასოა."
        case (number.includes(symbol) || number.toUpperCase().includes(symbol)):
            return "ეს სიმბოლო რიცხვია."
        default:
            return "ეს სიმბოლო სხვა სიმბოლოა."
    }
}
