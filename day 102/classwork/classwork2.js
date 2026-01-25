//შექმენი სტრინგი სადაც შეინახავ რაიმე სიტყვას, შენი დავალებაა რომ კონსოლში გამოიტანო მხოლოდ ხმოვანი ასოები, გამოიყენე for of ციკლი

let word = "wasabi"
let vowels = "aeiou"

for (let char of word){
  if (vowels.includes(char)){
    console.log(char)
  }
}

