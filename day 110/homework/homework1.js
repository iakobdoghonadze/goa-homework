//შექმენით სია სადაც ათწილადები და მთელი რიცხვები. გამოიტანეთ მხოლოდ ისეთი რიცხვები რომლებიც არის მთელი

let numbers = [1, 2.5, 3, 4.75, 5, 6.0, 7.25, 8, 9.5, 10]
let wholeNumbers = numbers.filter(num => Number.isInteger(num))
console.log(wholeNumbers)

