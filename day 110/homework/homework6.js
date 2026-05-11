//შექმენით სია სადაც იქნება რიცხვები. დააბრუნეთ პირველივე რიცხვი რომელიც არის მარტივი რიცხვი.


function isEasy(num) {
    if (num <= 1) return false
    for (let i = 2;i <= Math.sqrt(num);i++) {
        if (num % i === 0) return false
    }
    return true
}