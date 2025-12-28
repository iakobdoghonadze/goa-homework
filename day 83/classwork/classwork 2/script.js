//შემოატანინეთ მომხმარებელს სახელი და ასაკი, თუ სახელი და ასაკიც ემთხვევა თქვენსას მაშინ გამოიტანეთ კონსოლში შედეგი.სხვა დანარჩენ შემთხვევაში 'ჩვენი ასაკი ან სახელები განსხვავდება'.


let userage = prompt("enter your age:")
let username = prompt("enter your name:")

let myage = "14"
let myname = "iakobi"

if(userage === myage && username === myname){
    console.log("ერთნაირი სახელები და ასაკი გვაქვს!!")
}
else{
    console.log("ჩვენი ასაკი ან სახელები განსხვავდება")
}