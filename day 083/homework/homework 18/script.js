//გააკეთეთ მინი ჯეირანი. მომხმარებელს უნდა შემოატანინოთ ჭა, მაკრატელი ან ფურცელი. მეორე ცვლადში შეინახეთ თქვენ რაც გინდათ. და გამოიტანეთ შედეგი.


let userinp = prompt("enter rock,paper or scissors")
let rock = "rock"

if (userinp === "rock"){
    console.log("it's a draw!")
}

if(userinp === "paper"){
    console.log("you win!")
}

if (userinp === "scissors"){
    console.log("you lost, good luck next time!")
}

else{
    console.log("that is not an option ...")
}