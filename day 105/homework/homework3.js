//შექმენით სია, სადაც იქნება ნებისმიერი ტიპის მონაცემი. და წამოიღეთ რენდომულად რომელიმე ინდექსზე მყოფი სიმბოლო.

let list = [1, "heliavas bazroba", true, "monaganaweri", 88,"jonjolia", 14, 26, 271]
let number = Math.floor(Math.random() * list.length)
let rindx = list[number]
console.log(rindx)