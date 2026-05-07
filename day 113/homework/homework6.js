// დაწერე ფუნქცია createCar(brand, year)

// დააბრუნოს ობიექტი:

// brand
// year

// შექმენი რამდენიმე ობიექტი თან შეიანხე ცვლადებში და დააკონსოლლოგე

function createCar(brand, year){
    return {
        brand: brand,
        year: year
    }
}

let car1 = createCar("Toyota", 2020)
let car2 = createCar("Honda", 2021)
let car3 = createCar("Ford", 2022)

console.log(car1)
console.log(car2)
console.log(car3)