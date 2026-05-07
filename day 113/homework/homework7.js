//შექმენი ფუნქცია ავტომობილზე,ქონდეს model,brand,year,color და მოიფიქრე სხვა მნიშვნელობები შენითაც თუ შეძლებ

// შექმენი factory function რომელიც შექმნის მანქანის ობიექტებს,შექმენი რამდენიმე ობიექტი და ნახე კონსოლში ყველა მათგანი

function createCar(model, brand, year, color){
    return {
        model: model,
        brand: brand,
        year: year,
        color: color
    }
}

let car1 = createCar("Camry", "Toyota", 2020, "Red")
let car2 = createCar("Civic", "Honda", 2021, "Blue")
let car3 = createCar("Mustang", "Ford", 2022, "Black")
console.log(car1)
console.log(car2)
console.log(car3)
