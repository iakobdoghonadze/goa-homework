//შექმენით კალკულატორის ფუნქცია, რომელსაც უნდა გადაეცეს სამი არგუმენტი. ორი რიცხვი და 1 მოქმედება უნდა იყოს.

function calculator(num1,func,num2){
    if (func === '-'){
     return num1 - num2   
    }

    else if (func === '+'){
        return num1 + num2
    }

    else if (func === '/'){
        return num1 / num2
    }

    else if (func === '*'){
        num1 * num2
    }
}

let num1 = Number(prompt("enter a number:"))
let func = prompt("enter the function")
let num2 = Number(prompt("enter another number:"))

console.log(calculator(num1,func,num2))