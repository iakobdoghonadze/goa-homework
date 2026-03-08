//შექმენით ობიექტი, სადაც იქნება სია. სიაში უნდა იყოს სხვადასხვა ტიპის მონაცემები და მინიმუმ 10 ელემენტი. შიგნით შექმენით ისეთი მეთოდი რომელიც მხოლოდ Number ტიპის მონაცემებს გადაამრავლებს ერთმანეთზე.

let somelist = {
  list: [5, "hai", true, 271, 1945, "vvorld", 67, false, 68,"wah", 69],
  
  wasabi(){
    let nums = 1
    for (let num of this.list){
      if (typeof num === 'number'){
        nums *= num
      }
    }
    return nums
  }
}

console.log(somelist.wasabi())
