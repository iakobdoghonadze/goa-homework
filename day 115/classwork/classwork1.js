//შექმენი ობიექტი ავტომობილების შესახებ --> brand , model , year , color

// შენი დავალებაა რომ შებამისი მეთოდის დახმარებით მიიღო სია სადაც იქნბება კიდევ სიები key , value წყვილებით , შენი დავალებაა კონსოლში გამოიტანო key ები ცალკე value ბი ცალკე(გამოიყენე for ან forEach)

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Red"
}

for (let key in car) {
    console.log("Key:" + key)
    console.log("Value:" + car[key])
}

