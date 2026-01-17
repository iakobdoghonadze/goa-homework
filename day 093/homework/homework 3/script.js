//მომხმარებელს შემოატანინეთ რიცხვი. და ამ რიცხვის გამყოფები გამოიტანეთ სიის სახით.

let num = Number(prompt("enter a number:"))
let divisors = []

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    divisors.push(i)
  }
}

console.log(divisors)
