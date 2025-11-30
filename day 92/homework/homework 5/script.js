//მოცემული გაქვთ სია: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
//მომხმარებელს შემოატანინეთ ორი რიცხვი. შემოტანილი რიცხვებიდან, ყველაზე პატარა რიცხვი, რომელიც იქნება,  იმ რიცხვიდან გამოიტანეთ მეორე რიცხვის ჩათვლით ყველა ელემენტი, ინდექსების მიხედვით.

let list = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]

let userinp1 = Number(prompt("enter a number 1-15:"))
let userinp2 = Number(prompt("enter another number 1-15:"))
let higher = 0 
let lower = 0



if (userinp1 > userinp2){
    higher = userinp1
    lower = userinp2

    while (lower < higher){
        console.log(list[lower])
        lower++
    }
    
}

else if(userinp2 > userinp1){
    higher = userinp2
    lower = userinp1

    while (lower < higher){
        console.log(list[lower])
        lower++
    }
}
