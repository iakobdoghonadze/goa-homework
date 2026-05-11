//შექმენით ცვლადი სადაც შეინახავთ მინიმუმ 20 წიმბოლოიან სტრინგს სადაც იქნება სფეისებიც. გადააქციეთ ეს სტრინგი სიად და დააბრუნეთ პირველივე ხმოვანი რომელ ინდექსზეა.

let longString = "This is a long string with spaces and vowels"
let stringArray = longString.split(" ")
let vowels = "aeiou"
let firstVowelIndex = stringArray.findIndex(word => vowels.includes(word[0].toLowerCase()))

console.log(firstVowelIndex)