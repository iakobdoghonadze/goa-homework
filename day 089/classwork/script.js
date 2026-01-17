//1)შექმენი ერთი სია,სადაც მოათავსებთ განსხვავებული ტიპის ელემენტებს,5 ზე მეტი ელემენტი იყოს სიაში

// ---გამოიტანეთ სიის თითოეული ელემენტი ცალ ცალკე
let array = ["awsdfe",true,45,12.5,"hello",23]

console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
// ---გამოიტანე სიის თითოეული ელემენტი for loop ის გამოყენებით

for(let i = 0;i< array.length;i++){
    console.log(array[i])
}

// ---გამოიტანე სიის თითოეული ელემენტი while loop ის გამოყენებით

let j = 0

while(j<array.length){
    console.log(array[j])
j++
}