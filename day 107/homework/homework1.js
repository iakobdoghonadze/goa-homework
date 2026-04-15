//შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ რიცხვზე დაგვიბრუნებს რიცხვი ლუწია თუ კენტი
//// arrow function && function expression (ორივენაირად დაწერეთ)


let eorov1 = function(num){
    if (num % 2 === 0){
    return "ლუწია"
    }

    else{
    return "კენტი"
    }
}

let eorov2 = (num) => {
    if (num % 2 === 0){
    return "ლუწია"
    }

    else{
    return "კენტი"
    }
}