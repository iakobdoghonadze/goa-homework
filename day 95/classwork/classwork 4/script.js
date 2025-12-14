//ამოცანა — რიცხვების მასივში მინიმუმის პოვნა

// შექმენი ფუნქცია findMin(numbers)

// პარამეტრი: რიცხვების სია

// ფუნქციამ უნდა იპოვოს და დააბრუნოს მასივში ყველაზე პატარა რიცხვი.

function findMin(numbers){
    let min = numbers[0]
    for(let i = 0;i < numbers.length; i++){
        if(numbers[i] < min){
            min = numbers[i]
        }
    }
    return min
}

console.log(findMin([25,56,43,32,98,56]))