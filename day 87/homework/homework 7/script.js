//მომხმარებელს შემოატანინეთ ორი რიცხვი. და ამ ორი რიცხვის შიგნით მყოფი ყველა რიცხვი შეკრიბეთ.

let num = Number(prompt("enter a number:"))
let num2 = Number(prompt("enter a second number:"))

let result = 0

for(let i = num;i <= num2;i++){
    result += i
}
console.log(result)