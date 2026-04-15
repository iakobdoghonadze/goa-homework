// მოცემულია:

// [
//   { name: "apple", price: 2 },
//   { name: "banana", price: 5 },
//   { name: "orange", price: 3 }
// ]

// reduce-ით იპოვე ყველაზე ძვირიანი პროდუქტი (ობიექტი მთლიანად დააბრუნე).

let products = [
  { name: "apple", price: 2 },
  { name: "banana", price: 5 },
  { name: "orange", price: 3 }
]

let mostexpensive = products.reduce((max, current) => current.price > max.price ? current : max)

console.log(mostexpensive)

