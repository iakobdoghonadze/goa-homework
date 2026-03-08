//გააკეთეთ პატარა თამაში. მომხმარებელმა უნდა შემოიტანოს 1-დან 100-მდე რენდომ რიცხვი. და უნდა გამოიცნოს რენდომ რიცხვი. იმ შემთხვევაში თუ მომხმარებლის შემოტანილ რიცხვს და ჩაფიქრებულ რიცხვს შორის შუალედი 10-ზე ნაკლებია. მიანიშნოს მომხმარებელს რომ გამოცნობასთან ძალიან ახლოს არის. სხვა შემთხვევაში უთხრას მეტია თუ ნაკლები.

let secretnumber = Math.floor(Math.random() * 100) + 1
let userguess = parseInt(prompt("შეიტანეთ რიცხვი 1-დან 100-მდე:"))

if (userguess === secretnumber){
    alert("გილოცავ! სწორად გამოიცანი! რიცხვი იყო " + secretnumber)
}
else if ((userguess > secretnumber && userguess - secretnumber < 10) || userguess < secretnumber && secretnumber - userguess < 10){
    alert("ძალიან ახლოს ხარ! სწორი პასუხი იყო " + secretnumber)
}
else if (userguess > secretnumber){
    alert("შენი რიცხვი მეტია. სწორი პასუხი იყო " + secretnumber)
}
else {
    alert("შენი რიცხვი ნაკლებია. სწორი პასუხი იყო " + secretnumber)
}


