//შექმენით ფუნქცია, რომელსაც გადაეცემა ტექსტი სადაც იქნება რიცხვებიც შერეული. დათვალეთ რამდენი ლუწი ციფრია მოცემულ სტრინგში (ternary operator)

function counteven(thing) {
    
    let number = "0123456789"
    let count = 0
    
    
    for (let char of thing) {
        if (number.includes(char)) {
            count += (Number(char) % 2 === 0) ? 1 : 0
        }
    }
    return count
}
