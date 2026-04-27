//შექმენით სია სადაც იქნება მინიმუმ 7 სტრინგი. დააბრუნეთ ყველაზე გრძელი სიტყვა.


let words = ["apple", "banana", "strawberry", "grapefruit", "kiwi", "watermelon", "blueberry"]

let longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest)

console.log(longestWord)