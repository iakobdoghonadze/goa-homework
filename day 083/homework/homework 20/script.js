//მომხმარებელს შემოატანინე 3 რიცხვი. თუ ამ სამი რიცხვის ჯამი იქნება ლუწი. მაშინ მათი საშუალო 
//არითმეტიკული დააბრუნეთ. სხვა შემთხვევაში 2-ზე გაამრავლეთ



let num1 = Number(prompt("შეიყვანეთ პირველი რიცხვი:"))
let num2 = Number(prompt("შეიყვანეთ მეორე რიცხვი:"))
let num3 = Number(prompt("შეიყვანეთ მესამე რიცხვი:"))

let sum = num1 + num2 + num3
let result = 0

if (sum % 2 === 0) {
    result = sum / 3
}

else {
    result = sum * 2
}

console.log("შედეგი:" + result)
