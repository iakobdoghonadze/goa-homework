//შექმენით სია სადაც იქნება მინიმუმ 5 რიცხვი. გადაუარეთ ამ სიას და კვადრატში აიყვანეთ თითოეული მათგანი. შემდეგ წამოიღეთ მხოლოდ ისეთი რიცხვები რომლებიც არის ორნიშნა

let numbers = [2, 5, 7, 11, 13, 20]
let squared = numbers.map(n => n * n)
let twoDigit = squared.filter(num => num >= 10 && num <= 99)

console.log(twoDigit)
