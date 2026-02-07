//მომხმარებელს შემოატანინეთ სახელი და ამ სახელის თითოეული ასო გამოიტანეთ ცალცალკე for of-ის გამოყენებით

let username = prompt("enter your username:")

for (let char of username){
    console.log(char)
}