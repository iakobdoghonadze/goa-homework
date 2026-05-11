//შექმენი ობიექტი შენს შესახხებ --> name , surname , age
// შექმენი მეორე ობიექტი სადაცვ იქნება --> adress , hobby , favColor
// შენი დავალებაა გააერთიანო ეს ორივე ობიექტი ერთ ობიექტში და შეინახო ცვლადში'
// შემდეგ მოახდინე ამ ობიექტის დესტრუქცია და გამოიტანე კონსოლში თითოეული მათგანი

let person1 = {
    name: "lee",
    surname: "lo",
    age: 28
}

let person2 = {
    address: "123 Main St",
    hobby: "Reading",
    favColor: "Blue"
}
let combinedPerson = { person1, person2 }

let { name, surname, age, address, hobby, favColor } = combinedPerson
