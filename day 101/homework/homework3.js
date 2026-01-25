//შექმენით ობიექტი საიდანაც ამოშლით რომელიმე ორ მნიშვბელობას და ერთს გაანახლებთ.

let student = {
  name: 'wasabi',
  age: 20,
  city: 'tbilisi',
  class: 'A',
  email: 'wasabi@gmail.com'
}

// pirveli obieqtis consolshi gamotana
console.log(student)

delete student.city
delete student.email

//ori mnishvnelobis washlis mere gamotana
console.log(student)

student.age = 21

//dasrulebuli obieqtis gamotana
console.log(student)


