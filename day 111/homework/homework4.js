//შექმენით მასივი სადაც იქნება დუბლიკატი მნიშვნელობები. თქვენი დავალებაა ამოშალოთ დუბლიკატები.
let numbers = [1, 2, 3, 2, 4, 1, 5]

let uniqueNumbers = numbers.filter((item, index) => {
  return numbers.indexOf(item) === index
})

console.log(uniqueNumbers)
