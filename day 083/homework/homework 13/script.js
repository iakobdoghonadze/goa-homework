//მომხმარებელმა შეიყვანოს ქულა (0–100). თუ ქულა ≥ 51, გამოცდა ჩაბარებულია, სხვა შემთხვევაში — ჩაჭრილია.

let neededforpass = 50
let userscore = Number(prompt("enter your score:"))

if (userscore > neededforpass){
    console.log("you have passed!!")
}
if (userscore < neededforpass){
    console.log("you have failed, try again next year!")
}