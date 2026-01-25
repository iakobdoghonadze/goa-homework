//შექმენით მანქანის ობიექტი. სადაც იქნება ბრენდი, მოგწონთ თუ არა (true/false) და გამოშვების წელი. შემდეგ გაანახლეთ გამოშვების წელი და დაამატეთ მოდელი. წაშალეთ მოგწონთ თუ არა.

let car = {
    brand: "apollo",
    like_it: true,
    year: 2017
}

car.year = 2018
car.model = "Intensa Emozione"
delete car.like_it // delete car["like_it"]