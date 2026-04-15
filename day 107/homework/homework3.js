//შექმენით ფუნქცია რომელიც არგუმენტად გადაცემულ რიცხვზე დაგვიბრუნებს ზუსტად ამოდის თუ არა ფესვი, თუ არ ამოდის მაშინ ამ რიცხვს აიყვანს კვადრატში (ტერნარი გამოიყენეთ).


function rootthing(num){
    let root = Math.sqrt(num)
    return Number.isInteger(root) ? root : num * num
}

function rootthing2(num) {
    let root = Math.sqrt(num)
    return Number.isInteger(root) ? root : num * num
}


