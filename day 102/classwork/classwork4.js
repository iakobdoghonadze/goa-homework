//შექმენით ობიექტი სადაც შეინახავთ რამოდენიმე რიცხვს როგორც კენტს ასევე ლუწს,
// თქვენი დავალებაა რომ იპოვოთ ყველა ლუწი რიცხვის ჯამი და კენტი რიცხვების რაოდენობა

let numbers = {
  num1: 5,
  num2: 12,
  num3: 7,
  num4: 18,
  num5: 3,
  num6: 20,
  num7: 9,
  num8: 14
}

let evensum = 0
let oddcount = 0

for (let key in numbers){
  if (numbers[key] % 2 === 0){
    evensum += numbers[key]
  } else {
    oddcount++
  }
}

console.log(evensum)
console.log(oddcount)