//შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. და ახალ სიაში დააბრუნეთ მხოლოდ ის ელემენტები რომლებიც იქნება სტრინგ ტიპის მონაცემი (for of-ით)


let list = [
  "wello",
  42,
  "world",
  true,
  "javascript",
  null,
  3.14,
  "string",
  "wasabi",
  100
]

let stringlist = []

for (let element of list){
  if (typeof element === "string"){
    stringlist.push(element)
  }
}

console.log(stringlist)

