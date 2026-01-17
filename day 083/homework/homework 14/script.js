//შემოიტანეთ ორი ასაკი. თუ ასაკები ტოლია — ისინი თანაკლასელები არიან და გამოიტანეთ შედეგი კონსოლში.

let age1 = Number(prompt("enter someone's age:"))
let age2 = Number(prompt("enter your age:"))

if (age1 === age2){
    console.log("you are classmates")
}

if (age1 > age2){
    console.log("the other person is older than you")
}

if (age1 < age2){
    console.log("you are older than the other person")
}