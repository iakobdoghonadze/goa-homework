//შექმენი 5 ცვლადი, სადაც განსხვავებული მონაცემები შეინახება. ჯერ შექმენი ობიექტი shorthand-ით, შემდეგ კი სხვა ხაზზე გამოიყენე დესტრუქცია, რომ ამოიღო მხოლოდ სახელის და მეილის მნიშვნელობა.
let name = "John Doe"
let age = 30
let email = "some@example.com"
let isActive = true
let skills = ["JavaScript", "React"]

let person = { name, age, email, isActive, skills }

let { name: personName, email: personEmail } = person

