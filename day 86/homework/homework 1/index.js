let prompt = require('prompt-sync')();

let number = Number(prompt('შეიყვანეთ რიცხვი: '));

if (number % 2 === 0 && number % 5 !== 0) {
    console.log("რიცხვი იყოფა 2ზე  და არ არის 5-ის ჯერადი");
} else {
    console.log("სხვა შემთხვევა");
}