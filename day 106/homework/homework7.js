//მომხმარებელს შემოატანინეთ რიცხვი. თუ რიცხვი არის ლუწი მაშინ აიყვანეთ კუბში, სხვა შემთხვევაში კვადრატში. (Math ობიექტი გამოიყენეთ)

let number = prompt("input:")

number % 2 === 0 ? console.log(Math.pow(number, 3)) : console.log(Math.pow(number, 2))
