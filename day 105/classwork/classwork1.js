//შექმენით  ობიექტი, რომელშიც იქნება მოსწავლის ინფორმაცია. შემდეგ for in-ის გამოყენებით გადაუარეთ პირველ ობიექტს. და თითოეული სტრინგი გადაამრავლეთ რენდომ რიცხვზე 1-დან 5-მდე და ისე გამოიტანეთ კონსოლში.

let student = {
  name: "silibistro",
  age: 14,
  grade: "8th",
}

for (let key in student){
  let randomnum = Math.floor(Math.random() * 5) + 1
  let repeated = ""
  for (let i = 0; i < randomnum; i++){
    repeated += student[key].toString()
  }
  let result = student[key] + " " + repeated
  console.log(result)
}
