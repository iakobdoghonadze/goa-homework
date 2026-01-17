//for loop - ის გამოყენებით, მომხმარებლის შემოტანილი რიცხვის ჩათვლით შეკრიბეთ ყველა რიცხვი და გამოიტანეთ საბოლოო ჯამი.

let promptt = Number(prompt("enter a number:"));
let sum = 0;

for (let i = 0; i <= promptt; i += 1) {
    sum += i;
}
console.log(sum);