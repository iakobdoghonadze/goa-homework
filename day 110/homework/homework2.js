//შექმენით სია სადაც იქნება სტრინგები. დააბრუნეთ ისეთი სტრინგები რომლებიც ხმოვნით იწყება

let vowels = "aeiou"
let strings = ["apple", "banana", "orange", "grape", "avocado", "kiwi"]

let vowelStrings = strings.filter(str => vowels.includes(str[0].toLowerCase()))
console.log(vowelStrings)