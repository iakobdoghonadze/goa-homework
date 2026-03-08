//შექმენით ფუნქცია, სადაც არგუმენტად გადაეცემა ფუნქციას მომხმარებლის შემოტანილი რიცხვი. switch / case გამოყენებით . თუ ქულა არის
/*
100 მაშინ დააბრუნეთ "საუკეთესო შედეგია, ყოჩაღ"
   90-დან 100 შუალედში - A
   80-დან 89 შუალედში  - B
   70-დან 79 შუალედში  - C
   55-დან 69 შუალედში - D
   55 -ზე ნაკლებია მაშინ - F
   სხვა შემთხვევაში "არასწორად შემოიტანეთ ქულა"
*/

function gradething(score){
  switch(true) {
    case score === 100:
      console.log("საუკეთესო შედეგია, ყოჩაღ")
      break
    case score >= 90 && score < 100:
      console.log("A")
      break
    case score >= 80 && score < 90:
      console.log("B")
      break
    case score >= 70 && score < 80:
      console.log("C")
      break
    case score >= 55 && score < 70:
      console.log("D")
      break
    case score < 55:
      console.log("F")
      break
    default:
      console.log("არასწორად შემოიტანეთ ქულა")
  }
}

