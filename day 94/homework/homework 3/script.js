//შექმენით ფუნქცია, რომელსაც გადაეცემა არგუმენტად სია. ამ სიაში უნდა იყოს მინიმუმ 5 რიცხვი. ფუნქციამ უნდა დააბრუნოს ამ სიაში მყოფი რიცხვების ჯამი.


function wasabi(list){
    let sum = 0
    for(let i = 0;i < list.length;i++){
        sum = sum + list[i]
    }
    return sum
}

console.log(wasabi([10, 20, 30, 40, 50]))