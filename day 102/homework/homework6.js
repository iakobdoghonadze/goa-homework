//შექმენით სია სადაც იქნება მინიმუმ 5 განსხვავებული ელემენტი. ზოგიერთი ელემენტი უნდა მეორდებოდეს. შემდეგ შექმენით ობიექტი სადაც ჩაამატებთ ამ ელემენტს როგორც key და მისი მნიშვნელობა იყოს რამდენჯერაც გვხვდება სიაში.


let list = [
  "banana",
  "apple", 
  "orange", 
  "banana", 
  "lemon", 
  "apple", 
  "lemon", 
  "banani"
]

let count = {}

for (let item of list) {
  if (count[item]) {
    count[item]++
  }
  else {
    count[item] = 1
  }
}

console.log(list)
console.log(count)