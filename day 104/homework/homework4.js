//შექმენით ფუნქცია, რომელიც რენდომულად აარჩევს რიცხვს 1-დან 10-მდე. და მომხმარებელმა უნდა გამოიცნოს ეს რიცხვი. ამისთვის მას უნდა ჰქონდეს 3 ცდა.

function wasabi() {
  let secretnumber = Math.floor(Math.random() * 10) + 1
  let attempts = 3
  let userguessed = false

  console.log("ჩავიფიქრე რიცხვი 1-დან 10-მდე")
  console.log("თქვენ გაქვთ " + attempts + " ცდა რომ ის გამოიცნოთ")

  while (attempts > 0 && userguessed === false){
    let userguess = Number(prompt("შეიყვანეთ რიცხვი (დარჩენილი ცდები: " + attempts + ")"))

    if (userguess === secretnumber){
      console.log("თქვენ სწორად გამოიცანით! რიცხვი იყო " + secretnumber)
      userguessed = true
    }
    else if (userguess > secretnumber){
      console.log("თქვენი რიცხვი მეტია!")
      attempts--
    }
    else if (userguess < secretnumber){
      console.log("თქვენი რიცხვი ნაკლებია!")
      attempts--
    }
  }

  if (userguessed === false){
    console.log("თქვენი ცდების ბალანსი ამოიწურა,(ცდების ბალანსის შესავსებად დაგვიკავშირდით: +995 591618878) სწორი პასუხი იყო " + secretnumber)
  }
}


wasabi()
