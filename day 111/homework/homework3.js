//შექმენით სია სადაც იქნება bool ტიპის (true, false) მნიშვნელობები. და დააბრუნეთ თუ ამ სიაში ყველა არის true თუ არა.

let list = [true, true, false, true]

let alltrue = list.reduce((acc, value) => acc && value, true)

console.log(alltrue)