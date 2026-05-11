//დაწერე ფუნქცია createCar(brand, model, year), რომელიც დააბრუნებს ობიექტს. გამოიყენე shorthand სინტაქსი პარამეტრების მისანიჭებლად.

function createCar(brand, model, year) {
    return {
        brand,
        model,
        year
    }
}


let myCar = createCar('Toyota', 'Corolla', 2020)
console.log(myCar)