//შექმენით სია სადაც იქნება მინიმუმ 10 რიცხვი. და გადაამრავლეთ ერთმანეთზე.


let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let product = 1
numbers.forEach(number => {
    product *= number
})
console.log("რიცხვების ნამრავლი არის: " + product)