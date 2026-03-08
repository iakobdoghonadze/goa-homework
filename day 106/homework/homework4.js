//მომხმარებელს შემოატანინეთ რიცხვი და გაიგეთ დადებითია თუ უარყოფითი რიცხვი

let number = prompt("შეიყვანეთ რიცხვი:")
number = Number(number)

number > 0 ? console.log("რიცხვი დადებითია") :
number < 0 ? console.log("რიცხვი უარყოფითია") : console.log("რიცხვი ნულია")