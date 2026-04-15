//შექმენით ფუნქცია რომელსაც გადაეცემა ორი რიცხვი არგუმენტად და ამ რიცხვებს შორის გაავლებს დიაპაზონს. შემდეგ დაგვიბრუნებს ამ რიცხვების ნამრავლს    



let func1 = (a, b) => {
    let product = 1
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    
    for (let i = min; i <= max; i++) {
        product *= i
    }
    
    return product
}


let func2 = function(a, b) {
    let product = 1
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    
    for (let i = min; i <= max; i++) {
        product *= i
    }
    
    return product
}
