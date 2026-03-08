//შექმენით ობიექტი რომელშიც იქნება ოთხი მეთოდი (შეკრება, გამოკლება, გამრავლება, გაყოფა). და თითოეულ მათგანს ჰქონდეს ორი პარამეტრი, რომელსაც გამოძახების დროს გადაეცემა არგუმენტად თქვენ მიერ არჩეული რიცხვი.

let calculator = {
  add: function(a, b){
    return a + b
  },
  subtract: function(a, b){
    return a - b
  },
  multiply: function(a, b){
    return a * b
  },
  divide: function(a, b){
    return a / b
  }
}
