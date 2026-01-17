//შექმენით ფუნქცია, რომელიც დაგვიბრუნებს შემოტანილი მნიშვნელობა ლუწია თუ კენტი

function odd_or_even(num){
    if (num % 2 === 0){
        return ' even '
    }
    
    else{
        return ' odd '
    }
}

let inp = Number(prompt("enter a number:"))

console.log(odd_or_even(inp))