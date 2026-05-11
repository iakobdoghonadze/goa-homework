//შექმენით სია სადაც იქნება სხვადასხვა ტიპის მონაცემები. დააბრუნეთ მხოლოდ კენტი რიცხვები.


let mixedData = [1, "hello", 2.5, 3, true, 4.75, 5, 6.0, "world", 7.25, 8, undefined, 9.5, 10]
let oddNumbers = mixedData.filter(item => item.valueOf() && item % 2 !== 0)

console.log(oddNumbers)
