//შექმენით ცვლადი სადაც შეინახავთ რენდომ რიცხვს 1-დან 20-მდე. მომხმარებელმა კი უნდა გამოიცნოს ეს რიცხვი.

let randomnum = Math.floor(Math.random() * 20) + 1
let userguess

do {
    userguess = prompt("გამოიცანით რენდომ რიცხვი 1-დან 20-მდე")
    if (Number(userGuess) === randomnum) {
        console.log("გილოცავთ! თქვენ გამოიცანით რიცხვი!")
    }
    else {
        console.log("სამწუხაროდ, თქვენ არ გამოიცანით რიცხვი. სცადეთ კიდევ ერთხელ.")
    }
}
while (Number(userguess) !== randomnum)

