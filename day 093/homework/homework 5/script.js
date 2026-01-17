//შექმენით მინიმუმ 5 ელემენტიანი სია, რიცხვებიც იყოს და სტრინგებიც. ამ სიას გადაუარეთ და ყველა რიცხვი გადაამრავლეთ ერთმანეთზე.

let list = [3, "hello", 5, "world", 2]
let result = 1

for (let i = 0; i < list.length; i++){
    if ((list[i] * 1) === (list[i] * 1)) {
        result = result * list[i]
    }
}

console.log(result)