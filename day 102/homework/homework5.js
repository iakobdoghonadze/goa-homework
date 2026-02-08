//შექმენით ობიექტი სადაც შეინახავთ ნებისმიერი ტიპის ინფორმაციას. მომხმარებელს შემოატანინეთ key. თუ ეს key არის ობიექტში მაშინ კონსოლში გამოაჩინეთ შესაბამისი მნიშვნელობა. სხვა შემთხვევაში შემოატანინე value და ობიექტში დაამატეთ.

let myObject = {}

let key = prompt("enter a key:")

if (key in myObject) {
  console.log(myObject[key])
}
else {
  let value = prompt("enter a value:")
  myObject[key] = value
  console.log(myObject)
}
